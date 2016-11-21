angular.module('taffeta')
       .factory('linksSvc', linksSvc);

linksSvc.$inject = ['$resource'];

function linksSvc ($resource){
    return $resource('/links/:id', null, {
        'update': { method:'PUT' }
    });
}