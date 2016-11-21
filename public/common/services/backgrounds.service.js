angular.module('taffeta')
       .factory('backgroundsSvc', backgroundsSvc);

backgroundsSvc.$inject = ['$resource'];

function backgroundsSvc ($resource){
    return $resource('/backgrounds/:id', null, {
        'update': { method:'PUT' }
    });
}