angular
  .module('novelIdeas', ['ui.bootstrap', 'ui.router'])
  .controller('BooksCtrl', BooksCtrl);

BooksCtrl.$inject = ['$http'];
function BooksCtrl($http) {
  const vm = this;
  const apiKey = process.env.NY_TIMES_API_KEY;
  vm.all = [];

  function booksIndex() {
    $http.get(`https://api.nytimes.com/svc/books/v3/lists.json?api_key=${apiKey}&list=combined-print-and-e-book-fiction`)
      .then((response) => {
        vm.all = response.data;
      });
  }
  booksIndex();
}
