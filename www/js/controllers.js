angular.module('app.controllers', [])
  
.controller('preguntasCtrl', ['$scope', '$stateParams','$timeout','$cordovaVibration','$cordovaNativeAudio', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $timeout, $cordovaVibration, $cordovaNativeAudio ){

	$scope.misPreguntas = [];
	var puntaje =0;
	var messagesRef = new Firebase('https://miapp-8f9a6.firebaseio.com');

	
	var flag = 0;

	messagesRef.on('child_added', function (snapshot) {
	$timeout(function(){

    var message = snapshot.val();
    $scope.misPreguntas.push(message);
    
   // console.log(aleatorio);
    $scope.pregunta = {};
   	

    flag++;


    //Una vez cargada todas las preguntas del firebase
    //ordeno el array aleatoriamente.

    if(flag == 3)
    {
    	var aleatorio1 = Math.floor(Math.random() * (3 - 0)) + 0;
    	var auxPreg = $scope.misPreguntas[0];
    	$scope.misPreguntas[0] = $scope.misPreguntas[aleatorio1];
    	$scope.misPreguntas[aleatorio1] = auxPreg;
    }
    
    $scope.pregunta.preg = $scope.misPreguntas[0];
});

  });
	 
	//Cambio el orden del array para que sea aleatorio


	var aleatorio1 = Math.floor(Math.random() * (3 - 0)) + 0;
	var auxPreg = $scope.misPreguntas[0];
	//$scope.misPreguntas[0] = $scope.misPreguntas[1];
	//$scope.misPreguntas[aleatorio1] = auxPreg;

	


	$scope.respuesta = {};
	$scope.respuesta.resultado="";
	$scope.activado = {};

	var boton = $('#btnProxima').hide();
	var contadorPreguntas = 0;

	$scope.Boton = function(boton_apretado)
	{

		
		console.log(boton_apretado);
		try
		{
			if($scope.misPreguntas[contadorPreguntas].correcta == boton_apretado )
			{
				$scope.respuesta.resultado = "RESPUESTA CORRECTA";
				puntaje = puntaje+100;
				$cordovaNativeAudio.play('sonido1');

				
			}
			else
			{
				$cordovaNativeAudio.play('sonido2');
				$scope.respuesta.resultado= "RESPUESTA INCORRECTA"
				
			}
		}
		catch(err)
		{
			console.log("sono");
		}



		
		$("#btnProxima").show();
		$("#boton1").hide();
		$("#boton2").hide();
		$("#boton3").hide();
		
	}

	$scope.Proxima = function()
	{
		try
		{
			 $cordovaVibration.vibrate(100);
		}
		catch(err)
		{

		}
		contadorPreguntas++;
		$scope.pregunta.preg = $scope.misPreguntas[contadorPreguntas];
		

		if(contadorPreguntas == $scope.misPreguntas.length)
		{
			$scope.respuesta.resultado = "YA RESPONDIO TODAS SUS PREGUNTAS SU PUNTAJE ES " + puntaje;
			$("#btnProxima").hide();
		}
		else
		{
			$("#btnProxima").hide();
			$("#boton1").show();
			$("#boton2").show();
			$("#boton3").show();
			$scope.respuesta.resultado ="";
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
 
