/**
 * Created by raulpedraza on 17/11/15.
 */
angular.module("jeviteca").controller("Geners",function($scope,$http){

    $http.get("resources/data/geners.json").then(

        function(success){

            $scope.geners =  success.data;

        },function(error){

        }
    );

});

