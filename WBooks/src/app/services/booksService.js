angular.module('w-books').service('booksService', ['$http',
  function ($http) {
    this.getBooks = () => $http.get('assets/books.json');

    this.getBook = (id) => {

      const booksMatches = (book) => book.id === parseInt(id);

      return this.getBooks().then(function (books) {
        return books.data.find(booksMatches);
      });
    };
  }
]);
