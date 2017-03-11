angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = '';
  $scope.inputError = 'URL cannot be empty';
  $scope.showError = true;

  $scope.addLink = function() {
    if (!$scope.showError) {
      Links.addOne($scope.link);
    }
  };

  $scope.isValid = function() {

    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

    if ($scope.link.length === 0) {
      $scope.inputError = 'URL cannot be empty';
      $scope.showError = true;
    } else if (!($scope.link.match(rValidUrl))) {
      $scope.inputError = 'Please enter a valid URL';
      $scope.showError = true;
    } else {
      $scope.showError = false;
    }
  };
});
