(function () {
    'use strict';

    angular
        .module('app.public')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'public',
                config: {
                    url: '',
                    template: '<ui-view></ui-view>',
                    abstract: true
                }
            },
            {
                state: 'public.home',
                config: {
                    url: '/',
                    templateUrl: 'app/public.module/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    title: ''
                }
            },
            {
                state: 'public.error',
                config: {
                    url: '/error',
                    templateUrl: 'app/public.module/error/error.html',
                    title: ''
                }
            },
            {
                state: 'public.login',
                config: {
                    url: '/login',
                    templateUrl: 'app/public.module/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    title: 'Login'
                }
            },
            {
                state: 'public.register',
                config: {
                    url: '/register',
                    templateUrl: 'app/public.module/register/register.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm',
                    title: 'Register'
                }
            },
            {
                state: 'public.faq',
                config: {
                    url: '/faq',
                    templateUrl: 'app/public.module/faq/faq.html',
                    controller: 'FaqController',
                    controllerAs: 'vm',
                    title: 'Faq'
                }
            },
            {
                state: 'public.ranking_global',
                config: {
                    url: '/ranking',
                    templateUrl: 'app/public.module/ranking/ranking.html',
                    controller: 'RankingController',
                    controllerAs: 'vm',
                    title: 'Ranking'
                }
            },
            {
                state: 'public.ranking_metric',
                config: {
                    url: '/ranking/:rankingName',
                    templateUrl: 'app/public.module/ranking/ranking-detail.html',
                    controller: 'RankingDetailController',
                    controllerAs: 'vm',
                    title: 'Ranking',
                    params: {
                        rankingName : null,
                        rankingData : null
                    },
                    resolve: {
                        rankingData : rankingData
                    },
                }
            },
            {
                state: 'public.challenge',
                config: {
                    url: '/challenges/:challengeId',
                    templateUrl: 'app/public.module/challenge/challenge.html',
                    controller: 'ChallengeController',
                    controllerAs: 'vm',
                    title: 'Challenges',
                    params: {
                        challengeId: null,
                        challengeData: null
                    },
                    resolve: {
                        challengeData : challengeData
                    },
                }
            }
        ];
    }

    /* @ngInject */
    function challengeData($q,
                           $state,
                           $stateParams,
                           $timeout,
                           ChallengeService) {
        
        var defer = $q.defer();

        $timeout(function(){
            if ($stateParams.challengeId === null) {
                $state.go('home');
                defer.reject();
            } else {
                ChallengeService
                    .getChallenge($stateParams.challengeId)
                    .then(onChallengeSuccess, onChallengeFails);
            }

        });

        ////
        
        function onChallengeSuccess(result) {
            defer.resolve(result.data.outcome);
        }

        function onChallengeFails(err) {
            defer.reject();
        }

        return defer.promise;
    }

    function rankingData($q,
                         $timeout,
                         $state,
                         $stateParams) {

        var defer = $q.defer();

        $timeout(function() {
            if ($stateParams.rankingName === null || $stateParams.rankingData === null) {
                $state.go('home');
                defer.reject();
            } else {
                defer.resolve($stateParams.rankingData);
            }
        });

        return defer.promise;
    }
})();
