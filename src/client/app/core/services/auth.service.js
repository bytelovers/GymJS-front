(function() {
    'use strict';

    angular
        .module('app.core')
        .service('AuthService', AuthService);

    /* @ngInject */
    function AuthService($q,
                         $http,
                         $state,
                         $rootScope,
                         localStorageService,
                         jwtHelper,
                         CONFIG) {
        var config = {
            tokenkey : 'token'
        };

        var _userData  = null;
        var _loginName = null;

        return {
            login                  : login,
            logout                 : logout,
            getToken               : getToken,
            getCurrentUser         : getCurrentUser,
            updateCurrentUser      : updateCurrentUser,
            isLogged               : isLogged,
            register               : register,
            setUser                : setUser,
            interceptorTokenGetter : interceptorTokenGetter
        }

        function login(user, pass) {
            var defer = $q.defer();
            authenticate();
            return defer.promise;

            function authenticate() {
                var _loginData = {
                    login : user,
                    pwd   : pass
                };

                $http
                    .post(CONFIG.apiBaseUrl + '/login', _loginData)
                    .then(onLoginSuccess, onLoginFails);

                ////
                
                function onLoginSuccess(result) {
                    _loginName = result.data.outcome.login;
                    setToken(result.data.outcome['x-token']);
                    $rootScope.$emit('user:logged');
                    $state.go('private.profile');
                }

                function onLoginFails(err) {
                    removeToken();
                }
            }
        }

        function logout() {
            _userData = null;
            removeToken();
            setUser(null);
        }

        function register(data) {
            return $http.post(CONFIG.apiBaseUrl + '/users', data);
        }

        function getCurrentUser() {
            var defer = $q.defer();
            if(_userData === null) {
                $http
                    .get(CONFIG.apiBaseUrl + '/users/' + _loginName)
                    .then(onUserSuccess, onUserFails);

                function onUserSuccess(result) {
                    _userData = result.data.outcome;
                    defer.resolve(_userData);
                }

                function onUserFails(err) {
                    defer.reject(err);
                }
            } else {
                defer.resolve(_userData);
            }

            return defer.promise;
        }

        function updateCurrentUser(user) {
            return $http.put(CONFIG.apiBaseUrl + '/users/' + _loginName, user);
        }

        function isLogged() {
            if (typeof getToken() === 'undefined' || getToken() === null) { return false };

            var _isExpired = jwtHelper.isTokenExpired(getToken());
            return !_isExpired;
        }

        function setUser(user) {
            _userData = user;
        }

        /**
         * Return auth token
         * @returns {*} token
         */
        function getToken() {
            return localStorageService.get(config.tokenkey);
        }

        /**
         * Set auth token
         * @param token
         * @returns {*}
         */
        function setToken(token) {
            localStorageService.set(config.tokenkey, token);
        }

        /**
         * Remove user token
         */
        function removeToken() {
            localStorageService.remove(config.tokenrkey);
        }

        function interceptorTokenGetter(url) {
            var idToken = getToken();
            if (!idToken) {
                return null;
            }

            return idToken;
        }
    }
})();