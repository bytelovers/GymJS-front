(function() {
    'use strict';

    angular
        .module('app.widgets.components')
        .controller('HmdHeaderController', HmdHeaderController);

    /* @ngInject */
    function HmdHeaderController($rootScope,
                                 logger,
                                 AuthService) {
        var vm                = this;
        vm.title              = 'Admin';
        vm.mobileHeaderOpened = false;
        vm.user = {
            isLogged: false
        }

        vm.toggleOpened = toggleOpened;

        function toggleOpened() {
            vm.mobileHeaderOpened = !vm.mobileHeaderOpened;
        }

        $rootScope.$on('user:logged', function(){
            vm.user.isLogged = AuthService.isLogged();
        });
    }
})();
