/**
 * Created by djdapz on 10/19/15.
 */

var appServices = angular.module('rushBuddy.services');

appServices.factory('UserService', function(){
    return {
        name: {
            username: "djdapz",
            first: "Devon",
            last: "D'Apuzzo"
        },
        school: "Northwestern University",
        fraternity: {
            name: "Delta Tau Delta",
            letters: "%CE%94 T %CE%94"
        }

    }
});
