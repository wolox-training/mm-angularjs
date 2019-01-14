angular.module('w-books').controller('BookDetailController',
  ['$stateParams', 'booksService',
    function ($stateParams, booksService) {
      booksService.getBook($stateParams.bookId).then((response) => {
        this.book = response;
      });

    }
  ]
);
