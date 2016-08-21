(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate',
      'ngSanitize',
      'angular-jwt',
      'blocks.exception',
      'blocks.logger',
      'blocks.router',
      'ui.bootstrap',
      'ui.router',
      'ace',
      'ngplus',
      'chart.js'
    ]);
})();
