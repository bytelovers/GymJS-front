(function() {
  'use strict';

  angular
    .module('app.private')
    .controller('PrivateController', PrivateController);

  /* @ngInject */
  function PrivateController(logger,
                             AuthService) {
    var vm = this;
    vm.title = 'Admin';

    activate();

    function activate() {
      logger.info('Activated Private View');
    }
  }
})();
