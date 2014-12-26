function regCtrl($scope)
{
	
$scope.register=[{input:''}];


$scope.inputSave=function()
{
$scope.register=[];
$scope.register.push({input:$scope.fn},{input:$scope.fatn},{input:$scope.ln},{input:$scope.ct},{input:$scope.pn},{input:$scope.add},{input:$scope.mid},{input:$scope.gen},{input:$scope.dt},{input:$scope.rg},{input:$scope.qf},{input:$scope.sc});
        $scope.fn=" ";
		$scope.fatn=" ";
		$scope.ln=" ";
		$scope.ct=" ";
		$scope.pn=" ";
		$scope.add=" ";
		$scope.mid=" ";
		$scope.gen.value=" ";
		

		$scope.dt=" ";
		$scope.rg=" ";
		$scope.qf=" ";
		$scope.sc=" ";
		
}
}    