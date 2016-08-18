(function() {
  'use strict';

  angular
    .module('app.widgets.components')
    .component('hmdHeader', {
      restrict: 'E',
      templateUrl: 'src/client/app/widgets/components/hmd-header/hmd-header.html',
      controller: Controller,
      controllerAs: 'vm'/*,
        bindings: {
            beneficiary: '=',
            showName: '<?',
            layout: '@?',
            hover: '=?',
            size: '@?',
            nameProperty: '@?',
            active: '=?'
        }*/
    });

  /* @ngInject */
  function Controller() {
  }
})();
