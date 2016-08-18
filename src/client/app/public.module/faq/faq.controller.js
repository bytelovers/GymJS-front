(function() {
  'use strict';

  angular
    .module('app.public')
    .controller('FaqController', FaqController);

  FaqController.$inject = ['faqService', 'logger'];

  /* @ngInject */
  function FaqController(faqService,
                         logger) {
    var vm      = this;
    vm.title    = 'Admin';

    vm.settings = {
      accordion: {
        isOpen    : false,
        oneAtTime : true
      }
    };

    activate();

    function activate() {
      vm.questions = faqService.getQuestions();
      //logger.info('Activated Public View');
    }
  }
})();
