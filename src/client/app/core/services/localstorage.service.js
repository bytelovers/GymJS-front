(function() {
    'use strict';

    angular
        .module('app.core')
        .service('localStorageService', localStorageService);

    /*@ngInject*/
    function localStorageService($window) {
        var service = {
            set: set,
            get: get,
            remove: remove,
            setObject: setObject,
            getObject: getObject
        };

        var sessionStorageSrv = $window.sessionStorage;
        var localStorageSrv = $window.localStorage;

        return service;

        ///////////////

        function set(key, value, local) {
            getStorageSrv(local)[key] = value;
        }

        function get(key, defaultValue) {
            var res = getStorageSrv(false)[key];
            if (typeof res === 'undefined') {
                res = getStorageSrv(true)[key];
            }
            return res || defaultValue;
        }

        function remove(key) {
            getStorageSrv(true).removeItem(key);
            getStorageSrv(false).removeItem(key);
        }

        function setObject(key, value, local) {
            getStorageSrv(local)[key] = JSON.stringify(value);
        }

        function getObject(key) {
            var res = get(key);
            return JSON.parse(res || null);
        }

        function getStorageSrv(local) {
            var storageSrv = local !== undefined && local ? localStorageSrv : sessionStorageSrv;
            return storageSrv;
        }
    }
})();
