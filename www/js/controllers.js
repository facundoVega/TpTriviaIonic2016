angular.module('app.controllers', [])
  
.controller('preguntasCtrl', ['$scope', '$stateParams','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $timeout ){

	$scope.misPreguntas = [];

	var messagesRef = new Firebase('https://miapp-8f9a6.firebaseio.com');

	

	messagesRef.on('child_added', function (snapshot) {
	$timeout(function(){

    var message = snapshot.val();
    $scope.misPreguntas.push(message);
    console.log($scope.misPreguntas);
    

});

  });
	$scope.respuesta = {};

	$scope.Boton = function(boton_apretado)
	{
		if($scope.misPreguntas[0].correcta == boton_apretado )
		{

			$scope.respuesta.resultado = "RESPUESTA CORRECTA";
		}
		else
		{

			$scope.respuesta.resultado= "RESPUESTA INCORRECTA"
		}
	}
}])
   
.controller('loginCtrl', ['$scope', '$stateParams','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

	$scope.datos = {};
	$scope.datos.nombre="";
	

	$scope.IrMenu = function()
	{
		var nombre = $scope.datos.nombre;

		$state.go('menu', {'name' : nombre});
	}


}])
   
.controller('informacionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.valores = {};
	$scope.valores.nombre = $stateParams.name; 
	

}])
 