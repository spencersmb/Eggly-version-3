angular.module('eggly.models.bookmarks',[

])
  .service('BookmarksModel', function ($http) {
    var model = this,
        URLS = {
          FETCH: 'app/data/bookmarks.json'
        },
        bookmarks;

    //before we send data to ctrl - we extract it here
    function extract(result) {
      return result.data
    }

    function cacheBookmarks(result) {
      heroes = extract(result);
      return heroes;
    }

    model.getBookmarks = function () {
      return $http.get(URLS.FETCH).then(cacheBookmarks);
    }

  })
;