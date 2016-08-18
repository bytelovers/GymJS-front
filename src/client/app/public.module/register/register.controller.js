(function() {
  'use strict';

  angular
    .module('app.public')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['logger'];

  /* @ngInject */
  function RegisterController(logger) {
    var vm   = this;
    vm.title = 'Admin';

    activate();

    function activate() {
      //logger.info('Activated Public View');
    }
  }
})();
