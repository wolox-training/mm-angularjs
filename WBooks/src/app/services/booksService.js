angular.module('w-books').service('booksService', ['$http',
  function ($http) {
    this.getBookList = () => $http.get('books.json').then((response) => {
      return response;
    });
  }
]);
