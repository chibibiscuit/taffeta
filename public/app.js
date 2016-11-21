(function(){
    var taffeta = angular.module('taffeta', [
        'ngResource',
        'ngAnimate',
        'ngRoute'
    ]);

    taffeta.config(['$routeProvider', '$locationProvider',  
        function($routeProvider, $locationProvider) {
            $routeProvider.
            when('/:id', {
                templateUrl: 'app/_index/index.html',
                controller: indexCtrl,
                controllerAs: 'vm'
            }).
            otherwise({ 
                redirectTo: '/'
            });
        }]);
})();