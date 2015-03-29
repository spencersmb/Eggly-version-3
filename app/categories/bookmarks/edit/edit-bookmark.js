angular.module('bookmarks.edit',[

])
  .config(function ($stateProvider) {
  $stateProvider
    .state('eggly.categories.bookmarks.edit',{
      url:'/bookmarks/:bookmarkId/edit',
      templateUrl:'app/categories/bookmarks/edit/edit-bookmark.tmpl.html',
      controller:'EditBookmarkCtrl as editBookmarkCtrl'
    });
  })
  .controller('EditBookmarkCtrl', function ($stateParams, $state, BookmarksModel) {
    var editBookmarkCtrl = this;

      function returnToBookmarks(){
        $state.go('eggly.categories.bookmarks', {
          //passs in param
          category: $stateParams.category
        })
      }

      function cancelEditing(){
        returnToBookmarks();
      }

      function updateBookmark(){
        //define this.bookmark as the copy
        editBookmarkCtrl.bookmark = angular.copy(editBookmarkCtrl.editedBookmark);
        //pass in the copy to updateBookmark function which just matches the index to the passed in bookmark and updates it
        BookmarksModel.updateBookmark(editBookmarkCtrl.editedBookmark);

        returnToBookmarks();
      }

      BookmarksModel.getBookmarkById($stateParams.bookmarkId)
          .then(function(bookmark){

            if(bookmark){
              //create reference
              editBookmarkCtrl.bookmark = bookmark;

              //edit the copy first for non-destructive editing
              editBookmarkCtrl.editedBookmark = angular.copy(editBookmarkCtrl.bookmark);
            }else{
              returnToBookmarks();
            }
          });

      editBookmarkCtrl.cancelEditing = cancelEditing;
      editBookmarkCtrl.updateBookmark = updateBookmark;

  })
;