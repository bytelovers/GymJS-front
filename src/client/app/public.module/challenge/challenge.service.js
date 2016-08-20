(function() {
    'use strict';

    angular
        .module('app.public')
        .service('ChallengeService', ChallengeService);

    /* @ngInject */
    function ChallengeService($http, CONFIG) {
        return {
            getChallenge : getChallenge
        }

        function getChallenge(challengeId) {
            return $http.get(CONFIG.apiBaseUrl + '/challenges/' + challengeId);
        }
    }
})();
