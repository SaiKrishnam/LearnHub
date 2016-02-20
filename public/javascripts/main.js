/**
 * Created by Saikrishnam on 2/3/2016.
 */

var app = angular.module('app',['ui.router']);

app.factory('bookmarkService',function(){
    //array consisting of bookmarked item
    var bookmark = {};
    bookmark.bookmarkedArray = [];

    return bookmark ;
});

app.controller('mainPageCtrl',['$scope','$http','bookmarkService',function($scope,$http,bookmarkService){
    $scope.names = ['computing','internet of things','js good parts'];
    $scope.title= "jsgp";
    $scope.sortby={};
    $http.get('/books').then(function(res){
        console.log(res.data);
        $scope.coursesFormDB = res.data;
    });
    $scope.clickedBookmark=function(course){
        $scope.isActive = !$scope.isActive ;
        console.log($scope.isActive);
        bookmarkService.bookmarkedArray.push(course);
        console.log(bookmarkService.bookmarkedArray);
    };
}]);

app.controller('bookmarksCtrl',['$scope','$http','bookmarkService',function($scope,$http,bookmarkService){
                $scope.bookmarkedBooks = bookmarkService.bookmarkedArray ;
}]);



app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('books', {
            url: '/books',
            templateUrl: '../templates/partial-mainpage.ejs'

        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('bookmarks', {
            url: '/bookmarks',
            templateUrl: '../templates/partial-bookmarks.ejs'
            // we'll get to this in a bit

        })

        .state('home', {
            url: '/',
            templateUrl: '../templates/partial-homepage.ejs'
            // we'll get to this in a bit

        })

});



