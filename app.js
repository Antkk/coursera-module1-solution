(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunch = "";
  $scope.message = "";

  $scope.processCheck = function() {
    var numItems = itemsInList($scope.lunch);
    $scope.message = getMessage(numItems);
  }
}

function itemsInList (listString) {
  var items = listString.split(',');
  if (listString == "") {
    return 0;
  }
  return items.length;
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
