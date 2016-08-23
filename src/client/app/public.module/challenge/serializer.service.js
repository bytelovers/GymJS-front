(function() {
    'use strict';

    angular
        .module('app.public')
        .service('ChallengeSerializerService', ChallengeSerializerService);

    /* @ngInject */
    function ChallengeSerializerService(CONFIG) {

        return {
            challengeData : challengeData
        }

        function challengeData(data) {
            data = data.map(function(challenge){
                var _active = moment(challenge.dates.end).isSameOrBefore(moment(), 'day');

                challenge.active   = _active;
                challenge.inactive = !_active;

                return challenge;
            });

            return data;
        }
    }
})();
