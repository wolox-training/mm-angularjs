angular.module('w-books').config([
  'localStorageServiceProvider',
  function (localStorageServiceProvider) {

    // Local Storage Setup
    localStorageServiceProvider.setPrefix(window.btoa('w-books-/* @echo environment */'));
  }
]);
