(function () {
    'use strict';

    angular
        .module('app.public')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'app/public.module/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    title: ''
                }
            },
            {
                state: 'login',
                config: {
                    url: '/login',
                    templateUrl: 'app/public.module/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    title: 'Login'
                }
            },
            {
                state: 'register',
                config: {
                    url: '/register',
                    templateUrl: 'app/public.module/register/register.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm',
                    title: 'Register'
                }
            },
            {
                state: 'faq',
                config: {
                    url: '/faq',
                    templateUrl: 'app/public.module/faq/faq.html',
                    controller: 'FaqController',
                    controllerAs: 'vm',
                    title: 'Faq'
                }
            },
            {
                state: 'ranking',
                config: {
                    url: '/ranking',
                    templateUrl: 'app/public.module/ranking/ranking.html',
                    controller: 'RankingController',
                    controllerAs: 'vm',
                    title: 'Ranking'
                }
            }
        ];
    }
})();
