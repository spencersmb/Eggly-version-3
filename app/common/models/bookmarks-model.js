angular.module('eggly.models.bookmarks',[

])
  .service('BookmarksModel', function ($http, $q) {
    var model = this,
        URLS = {
          FETCH: 'app/data/bookmarks.json'
        },
        bookmarks;

    //before we send data to ctrl - we extract it here
    function extract(result) {
      return result.data
    }

    function cachedBookmarks(result) {
      bookmarks = extract(result);
      return bookmarks;
    }


    //helper function to find bookmark
    function findBookmark(bookmarkId) {
      //get index of the bookmark we are editing

      return _.find(bookmarks, function (bookmark) {

        //compare current bookmark ID with the bookmark id that we passed in
        //it loops through every id in bookmarks and matches it to bookmark.id that we passed in

        return bookmark.id === parseInt(bookmarkId);
      });
    }

    model.getBookmarkById = function(bookmarkId){
      //defer data to check if its already been loaded?
      var deferred = $q.defer();

      if(bookmarks){
        //
        deferred.resolve(findBookmark(bookmarkId));
      }else{
        //do http call for the bookmarks data
        model.getBookmarks().then(function(){
          deferred.resolve(findBookmark(bookmarkId));
        });

        }
      return deferred.promise;
      };

      //if we just call http right away it calls it everytime even if we are editing bookmarks in which we know its already by called. So we rewrite it using if/else
      model.getBookmarks = function () {
        var deferred = $q.defer();

        if(bookmarks){
          //
          deferred.resolve(bookmarks);
        }else{
          //if it doesnt exist go get it
          $http.get(URLS.FETCH).then(function (bookmarks) {
            //and resolve it with a cached version of the bookmarks
            deferred.resolve(cachedBookmarks(bookmarks))
          });

        }
        return deferred.promise;
      };

      model.createBookmark = function (bookmark) {
        console.log('bookmark ' + bookmark);
        console.log('bookmarks '+bookmarks.length);
        bookmark.id = bookmarks.length;
        bookmarks.push(bookmark);
      };

      model.updateBookmark = function (bookmark) {
        //this simulates backend memory function
        //we are editing this object in memory.

        var index = _.findIndex(bookmarks, function (b) {

          return b.id == bookmark.id;
        });

        //now get the current bookmark with index and repace with new object
        bookmarks[index] = bookmark;
      };

      model.deleteBookmark = function(bookmark){

        var filterId =_.filter(bookmarks,function (b) {
          return b.id === bookmark.id;
        });

        if(filterId){
          bookmarks.splice(bookmark.id, 1);
        }
      }

    })
;