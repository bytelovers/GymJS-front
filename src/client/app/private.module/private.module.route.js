(function () {
    'use strict';

    angular
        .module('app.private')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'private',
                config: {
                    url: '/account',
                    template : '<ui-view></ui-view>',
                    abstract : true
                }
            },
            {
                state: 'private.profile',
                config: {
                    url: '/profile',
                    templateUrl: 'app/private.module/profile/profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm',
                    title: 'Profile'
                }
            },
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
