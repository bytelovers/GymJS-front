(function() {
  'use strict';

  angular
    .module('app.public')
    .controller('PublicController', PublicController);

  PublicController.$inject = ['logger'];

  /* @ngInject */
  function PublicController(logger) {
    var vm = this;
    vm.title = 'Admin';

    activate();

    function activate() {
      logger.info('Activated Public View');
    }
  }
})();
