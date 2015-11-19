/**
 * Created by raulpedraza on 17/11/15.
 */

angular.module("jeviteca").controller("NavigationBarController",function($scope){

    $scope.albumsInfo = function(){

        return $route.current && $route.current.$$route.originalPath === "/albums";
    }

    $scope.bandsInfo = function(){

        return $route.current && $route.current.$$route.originalPath === "/bands";
    }

    $scope.genersInfo = function(){

        return $route.current && $route.current.$$route.originalPath === "/geners";
    }
});