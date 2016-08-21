(function () {
    'use strict';
    
    var config = {
        appErrorPrefix : '[gymJsfront Error] ',
        appTitle       : 'gymJsfront'
    };

    angular
        .module('app.core')
        .value('config', config)
        .config(configure);

    /* @ngInject */
    function configure($httpProvider,
                       $logProvider,
                       routerHelperProvider,
                       exceptionHandlerProvider,
                       jwtInterceptorProvider,
                       jwtOptionsProvider) {

        initToastr();
        initLogProvider();
        initRouterHelperProviders();
        initExceptionHandlerProviders();
        initJWTOptionsProvider();
        initInterceptors();

        function initLogProvider() {
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
        }

        function initRouterHelperProviders() {
            routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
        }

        function initExceptionHandlerProviders() {
            exceptionHandlerProvider.configure(config.appErrorPrefix);
        }

        function initJWTOptionsProvider() {
            jwtOptionsProvider.config({
                whiteListedDomains: ['app.hackmasdificil.com', 'localhost']
            });
        }

        function initInterceptors() {
            jwtInterceptorProvider.tokenGetter = tokenGetter;
            // jwtInterceptorProvider.authPrefix = 'Bearer ';

            $httpProvider.interceptors.push('jwtInterceptor');
            $httpProvider.interceptors.push('httpInterceptor');
        }

        function initToastr() {
            // Toastr configuration
            toastr.options.timeOut = 4000;
            toastr.options.positionClass = 'toast-bottom-right';
        }
    }

    /* @ngInject */
    function tokenGetter(config, AuthService) {
        return AuthService.interceptorTokenGetter(config.url);
    }
})();
