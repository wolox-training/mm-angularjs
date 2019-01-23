angular.module('w-books').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      BOOK_DETAIL: {
        BACK: '< Volver',
        WBOOKS: 'WBooks',
        DUMMY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        RESERVE: 'Alquilar',
        SUGGESTIONS: 'Sugerencias',
        SUGGESTION: 'Sugerencia',
        COMMENTS: 'Comentarios',
        PROFILE_IMG: 'Imagen Perfil',
        ADD_COMMENT: 'Agregar Comentario',
        SEND: 'Enviar',
        MOCK_USER: 'Gandalf',
        DATE_PH: 'xx/xx/xx'
      }
    });
  }
]);
