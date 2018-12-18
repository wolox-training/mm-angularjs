angular.module('app-bootstrap').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('dashboard');
    });

    // Now set up the states
    $stateProvider
      .state('centered', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/centered/centered.html'
          }
        }
      })
      .state('centered.state1', {
        url: '/state1',
        views: {
          content: {
            templateUrl: '../app/components/centered/component1/component1.html',
            controller: 'Component1Controller',
            controllerAs: 'comp1Ctrl'
          }
        }
      })
      .state('centered.state2', {
        url: '/state2',
        views: {
          content: {
            templateUrl: '../app/components/centered/component2/component2.html',
            controller: 'Component2Controller',
            controllerAs: 'comp2Ctrl'
          }
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        views: {
          main: {
            templateUrl: '../app/components/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
