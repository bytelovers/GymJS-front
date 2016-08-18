(function() {
  'use strict';

  angular
      .module('app.public')
      .service('faqService', faqService);

  /* ngInject */
  function faqService() {
    var _questions = [
        {
          title  : '¿Cuánto tiempo tengo para resolver el reto?',
          answer : 'Lorem ipsum'
        },
        {
          title  : '¿Pasa algo si no entrego un reto o lo entrego tarde?, Estoy de vacaciones y el wifi en la playa va fatal.',
          answer : 'Lorem ipsum'
        },
        {
          title  : '¿Cómo se elige al ganador?',
          answer : 'Lorem ipsum'
        }
    ];

    return {
      getQuestions : getQuestions
    };

    function getQuestions() {
      return _questions;
    }
}
})();
