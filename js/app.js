var app =angular.module('campus360',[]);

app.controller("dashboardcontroller",function($scope){


    $scope.collegename="FISAT";
     $scope.totalStudents = 1200;
    $scope.totalFaculty = 120;
    console.log("dashboard controller is loaded");

    $scope.students=[
        "shahid","jhon","allen","shaun"
    ];    
    
   $scope.addStudent = function(){

    $scope.totalStudents++;

    $scope.showstudents=true;

    $scope.showDashboard = true;
    
    
};
});
