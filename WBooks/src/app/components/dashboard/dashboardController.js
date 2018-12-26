angular.module('w-books').controller('DashboardController', ['booksService', '$translate',
  function (booksService, $translate) {
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
    booksService.getBookList();
  }]
);
