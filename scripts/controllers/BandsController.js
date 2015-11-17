/**
 * Created by raulpedraza on 17/11/15.
 */
angular.module("jeviteca").controller("Bands",function($scope,$http){

    $http.get("resources/data/bands.json").then(

        function(success){

            $scope.bands =  success.data;

        },function(error){

        }
    );

});

