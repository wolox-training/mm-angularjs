angular.module('w-books').service('booksService', ['$http',
  function ($http) {
    this.getBooks = () => $http.get('assets/books.json');

    this.getBook = (id) => this.getBooks()
      .then((books) => books.data.find((book) => book.id === parseInt(id)));
  }
]);
