angular.module('w-books').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      DASHBOARD: {
        SELECT_FILTER: 'Seleccionar filtro',
        SEARCH: 'Buscar...',
        NO_CHOSEN_FILTER: 'Por favor, seleccione un filtro',
        TITLE: 'Titulo',
        AUTHOR: 'Autor'
      }
    });
  }
]);
