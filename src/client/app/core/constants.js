/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('CONFIG', {
            apiBaseUrl : 'http://app.hackmasdificil.com/api',
            apiToken   : 'da8c8fa2-7cee-4bdd-bd85-247c0cdbe5da'
        });
})();
