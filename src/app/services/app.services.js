/**
 * Created by djdapz on 10/19/15.
 */

/* Services */

var appServices = angular.module('rushBuddy.services', []);

appServices.factory('AboutService', function(){
    return {
        version: "0.1.0",
        owner: "NRDD INC",
        name: "RushBuddy"
    }
});
