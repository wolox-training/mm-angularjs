angular.module('w-books').service('booksService', ['$http',
  function ($http) {
    this.getBookList = () => $http.get('assets/books.json');
  }
]);
