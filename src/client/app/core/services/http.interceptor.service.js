(function () {
    'use strict';
    angular
        .module('app.core')
        .factory('httpInterceptor', function ($q, $rootScope, CONFIG) {
            return {
                'request': function (config) {
                    config.headers['x-api-key'] = CONFIG.apiToken;

                    return config;
                },

                'requestError': function (rejection) {
                    return $q.reject(rejection);
                },

                'response': function (response) {
                    return response;
                },

                'responseError': function (rejection) {
                    console.log('!!! ERRROOOOORRR');
                    sendErrorMsg(rejection);
                    return $q.reject(rejection);
                }
            };
        });

    /**
     * Envia el evento de error en llamada HTTP
     * @param rejection
     */
    function sendErrorMsg(rejection) {
        var status = rejection.status;
        var errObj = {
            url: rejection.config.url,
            errMsg: '',
            status: status
        };

        if (status === 0 && rejection.config.isTimeout) {
            errObj.errMsg = 'Timeout';
            errObj.status = 408;
        } else if (status !== 401 && status !== 403) {
            errObj.errMsg = buildErrMsg(rejection.data);
        }

        //$rootScope.$broadcast('http-response-error', errObj);

        function buildErrMsg(data) {
            var msg = '';
            if (data != null) {
                if (data.message !== undefined) {
                    msg = data.message;
                } else if (data.fault != null && data.fault.faultstring !== undefined) {
                    msg = data.fault.faultstring;
                } else if (data.throwing != null && data.throwing.errorCode !== undefined) {
                    msg = data.throwing.errorCode;
                } else if (data.error !== undefined) {
                    msg = data.error;
                }
            } else if (rejection.statusText !== undefined) {
                msg = rejection.statusText;
            }

            return msg;
        }
    }
})();
