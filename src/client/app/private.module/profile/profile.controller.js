(function() {
    'use strict';

    angular
        .module('app.private')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController(logger,
                               AuthService) {
        var vm   = this;
        vm.title = 'Admin';
        vm.user  = {}

        activate();

        function activate() {
            loadCurrentUser();
            // logger.info('Activated Public View');
        }

        function loadCurrentUser() {
            AuthService
                .getCurrentUser()
                .then(onUserSuccess, onUserFails);

            function onUserSuccess(result) {
                vm.user = vm.currentUser = result.data.outcome;
            }

            function onUserFails(err) {
                logger.error(err);
            }
        }
    }
})();
