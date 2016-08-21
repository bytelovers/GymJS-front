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

        vm.updateUser = updateUser;

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

        function updateUser() {
            var _data = {
                email   : vm.user.email,
                name    : vm.user.name,
                twitter : vm.user.twitter
            };
            AuthService
                .updateCurrentUser(_data)
                .then(onUpdateSuccess, onUpdateFails);

            ////

            function onUpdateSuccess(result) {
                logger.success(result.data.outcome);
            }

            function onUpdateFails(err) {
                logger.error(err);
            }
        }
    }
})();
