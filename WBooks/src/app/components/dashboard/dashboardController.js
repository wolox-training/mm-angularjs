angular.module('w-books').controller('DashboardController',
  ['booksService', '$translate',
    function (booksService, $translate) {

      booksService.getBooks().then((response) => {
        this.books = response.data;
      });

      this.filterBooks = (filter, query) => filter ? { [filter]: query } : [];
      this.bookFilters = [
        {
          value: 'author',
          name: $translate.instant('DASHBOARD.AUTHOR')
        },
        {
          value: 'title',
          name: $translate.instant('DASHBOARD.TITLE')
        }
      ];
    }]
);
