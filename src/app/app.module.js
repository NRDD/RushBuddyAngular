(function(angular) {
    angular.module("rushBuddy.services", []);
    angular.module("rushBuddy.homepage", []);
    angular.module("rushBuddy.about", []);


    angular.module("rushBuddy",
        [   "ngRoute",
            "rushBuddy.services",
            "rushBuddy.homepage",
            "rushBuddy.about"
    ]);
}(angular));