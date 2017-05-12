var app = angular.module('pascal',[])

app.controller('inputCtrl',function($scope, $http){
  $scope.pascal = function(depth) {
    if (depth<1){return}
    var arr = []
    //make pascal triangle array up to depth
    for (var i=0; i<=depth; i++){
      arr.push([1])
      row = arr[i]
      for (var j=0; j < i; j++) {
        if (j == i-1){row.push(1)}
        else{row.push(arr[i-1][j]+arr[i-1][j+1])}
      }
    }
    var solution = ""
    var element = ""
    //make solution string using pascal array
    for (var k=0; k<=depth; k++) {
      if (k==0){element = "(x^" + (depth-k) + ")"}
      else if (k==depth){element = " + (y^" + (k) + ")"}
      else {element = " + " + arr[depth][k] + "(x^" + (depth-k) + "*y^" + k + ")"}
      solution += element
      console.log(element)
    }
    $scope.solution = solution
  }
})
