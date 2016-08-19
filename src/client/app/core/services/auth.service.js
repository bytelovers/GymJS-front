(function() {
    'use strict';

    angular
        .module('app.core')
        .service('AuthService', AuthService);

    /* @ngInject */
    function AuthService($q,
                         $http,
                         CONFIG) {
        return {
            login    : login,
            register : register
        }

        function login(user, pass) {
            return $http.post(CONFIG.apiBaseUrl + '/login', {
                login : user,
                pwd   : pass
            });
        }

        function register(data) {
            return $http.post(CONFIG.apiBaseUrl + '/users', data);
        }
    }
})();