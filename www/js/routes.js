angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('preguntas', {
    url: '/page1/:name',
    templateUrl: 'templates/preguntas.html',
    controller: 'preguntasCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('informacion', {
    url: '/page3',
    templateUrl: 'templates/informacion.html',
    controller: 'informacionCtrl'
  })

  .state('menu', {
    url: '/menu/:name',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});