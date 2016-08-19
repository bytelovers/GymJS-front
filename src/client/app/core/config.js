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
                       exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        // Toastr configuration
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';

        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });

        $httpProvider.interceptors.push('httpInterceptor');
    }

})();
