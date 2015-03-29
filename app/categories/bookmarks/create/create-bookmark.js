angular.module('bookmarks.create',[

])
  .config(function ($stateProvider) {
    $stateProvider
          .state('eggly.categories.bookmarks.create',{
            url:'/bookmarks/create',
            templateUrl:'app/categories/bookmarks/create/create-bookmark.tmpl.html',
            controller:'CreateBookmarkCtrl as createBookmarkCtrl'
          });
  })
  .controller('CreateBookmarkCtrl', function ($state, $stateParams, BookmarksModel) {
    var createBookmarkCtrl = this;

    //method to go back to original state when you cancel or hit save
    function returnToBookmarks(){
        $state.go('eggly.categories.bookmarks', {
            //this will know to set itself to the category you are currently in because it will read the url
            category: $stateParams.category
            })
        }
    function cancelCreating(){
        returnToBookmarks();
    }

    function createBookmark(bookmark){

        //createBookmark
        BookmarksModel.createBookmark(bookmark);

        //return to bookmarkState
        //instead of hiding form after submit we redirect to this original state
        returnToBookmarks();
    }

    function resetForm(){
        createBookmarkCtrl.newBookmark = {
            title: '',
            url: '',
            category: $stateParams.category
        }
    }

    createBookmarkCtrl.cancelCreating = cancelCreating;
    createBookmarkCtrl.createBookmark = createBookmark;

    //creates an empty object when the create bookmark button is called
    //this means that createbookmark controller is driving the current view for the form
    resetForm();
    console.log(createBookmarkCtrl.newBookmark);

  })
;