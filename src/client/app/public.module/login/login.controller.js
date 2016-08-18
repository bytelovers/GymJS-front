(function() {
  'use strict';

  angular
    .module('app.public')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['logger'];

  /* @ngInject */
  function LoginController(logger) {
    var vm   = this;
    vm.title = 'Admin';

    activate();

    function activate() {
      //logger.info('Activated Public View');
    }
  }
})();
