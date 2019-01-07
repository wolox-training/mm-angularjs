angular.module('w-books').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {});
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy(null);
  }
]);
