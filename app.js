(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunch = "";
  $scope.message = "";
  $scope.msgColor = "none";

  $scope.processCheck = function() {
    var numItems = itemsInList($scope.lunch);
    if (numItems == 0) {
      $scope.msgColor = "red";
    } else {
      $scope.msgColor = "green";
    }
    $scope.message = getMessage(numItems);
  }
}

function itemsInList (listString) {
  var items = listString.split(',');
  if (listString == "") {
    return 0;
  }
  var count = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].replace(/\s/g, '') != '') {
      count++;
    }
  }
  return count;
}

function getMessage (numberOfItems) {
  if (numberOfItems == 0) {
    return "Please enter data first";
  } else if (numberOfItems <= 3) {
    return "Enjoy!";
  } else {
    return "Too much!";
  }
}

})();
