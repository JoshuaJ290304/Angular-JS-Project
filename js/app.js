var app = angular.module('campus360', []);

app.controller('dashboardController', function ($scope) {

    $scope.collegeName = "Campus360";
    $scope.totalStudents = 2500;
    $scope.totalFaculty = 94;

    $scope.showStudents = true;
    $scope.showDashboard = true;

    $scope.students = [
        "John Doe",
        "Jane Smith",
        "Michael Johnson",
        "Emily Davis",
        "William Brown"
    ];

    $scope.addStudent = function () {
        $scope.totalStudents = (Number($scope.totalStudents) || 0) + 1;
        $scope.students.push("Student " + $scope.totalStudents);
        $scope.showStudents = true;
    };

    $scope.addFaculty = function () {
        $scope.totalFaculty = (Number($scope.totalFaculty) || 0) + 1;
    };

});