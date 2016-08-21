(function() {
    'use strict';

    angular
        .module('app.private')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController(logger) {
        var vm   = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            // logger.info('Activated Public View');
        }
    }
})();
