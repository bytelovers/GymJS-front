(function() {
    'use strict';

    angular
        .module('app.public')
        .service('ChallengeService', ChallengeService);

    /* @ngInject */
    function ChallengeService($http, CONFIG) {
        return {
            getChallenges : getChallenges,
            getChallenge  : getChallenge
        }

        function getChallenges(challengeId) {
            return $http.get(CONFIG.apiBaseUrl + '/challenges');
        }

        function getChallenge(challengeId) {
            return $http.get(CONFIG.apiBaseUrl + '/challenges/' + challengeId);
        }
    }
})();
