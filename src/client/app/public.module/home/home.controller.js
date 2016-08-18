(function() {
  'use strict';

  angular
    .module('app.public')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['logger'];

  /* @ngInject */
  function HomeController(logger) {
    var vm = this;
    vm.title = 'Admin';

    activate();

    function activate() {
      logger.info('Activated Public View');
    }
  }
})();
