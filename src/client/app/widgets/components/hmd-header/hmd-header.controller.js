(function() {
    'use strict';

    angular
        .module('app.widgets.components')
        .controller('HmdHeaderController', HmdHeaderController);

    /* @ngInject */
    function HmdHeaderController(logger) {
        var vm                = this;
        vm.title              = 'Admin';
        vm.mobileHeaderOpened = false

        vm.toggleOpened = toggleOpened;

        function toggleOpened() {
            vm.mobileHeaderOpened = !vm.mobileHeaderOpened;
        }
    }
})();
