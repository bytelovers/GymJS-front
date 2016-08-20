(function() {
    'use strict';

    angular
        .module('app.public')
        .controller('ChallengeController', ChallengeController);

    /* @ngInject */
    function ChallengeController(logger,
                                 challengeData) {
        var vm           = this;
        vm.title         = 'Admin';
        vm.challengeData = challengeData;

        vm.onEditorLoaded = onEditorLoaded;

        activate();

        function activate() {
            logger.info('Activated Public View');
        }

        function onEditorLoaded(editor) {
            
            editor.session.setMode('ace/mode/javascript');
            editor.session.setTabSize(4);

            editor.setFontSize(16);

            editor.renderer.setTheme('chrome');

            // editor.setReadOnly(true);
        }
    }
})();
