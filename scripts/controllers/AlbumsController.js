angular.module("jeviteca").controller("Albums",function($scope,$http){


    $http.get("resources/data/albums.json").then(

        function(success){
debugger;
            $scope.albums =  success.data;

        },function(error){

        }
    );

});

