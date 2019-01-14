angular.module('w-books').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('dashboard');
    });

    // Now set up the states
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          main: {
            templateUrl: '../app/components/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
      })
      .state('book', {
        url: '/book/{bookId}',
        views: {
          main: {
            templateUrl: '../app/components/bookDetail/bookDetail.html',
            controller: 'BookDetailController',
            controllerAs: 'bookDetailCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
