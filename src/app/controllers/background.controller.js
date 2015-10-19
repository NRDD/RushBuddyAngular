/**
 * Created by djdapz on 10/19/15.
 */

var backgroundController = function($scope, UserService, AboutService){

    $scope.appName = AboutService.name;
    $scope.version = AboutService.version;
    $scope.owner = AboutService.owner;

    $scope.user = UserService.name;
    $scope.school = UserService.school;
    $scope.fraternity = UserService.fraternity;

    $scope.init = function(){
        1+1;
    }

    $scope.init();

};

angular
    .module('rushBuddy')
    .controller("backgroundController", backgroundController);

backgroundController.$inject = ['$scope', "UserService" ,"AboutService"];