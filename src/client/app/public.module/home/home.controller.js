(function() {
    'use strict';

    angular
        .module('app.public')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController(logger,
                            ChallengeService,
                            ChallengeSerializerService) {
        var vm   = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            loadChallenges();
            // logger.info('Activated Public View');
        }

        function loadChallenges() {
            ChallengeService
                .getChallenges()
                .then(onChallengesSuccess, onChallengesFails);

            ////
            
            function onChallengesSuccess(results) {
                vm.challenges = ChallengeSerializerService.challengeData(results.data.outcome);
            }

            function onChallengesFails(err) {
                logger(err);
            }
        }
    }
})();
