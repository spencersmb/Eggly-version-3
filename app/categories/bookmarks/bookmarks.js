//this view state is for when you click into a bookmark
angular.module('bookmarks',[
  'bookmarks.create',
  'bookmarks.edit',
  'eggly.models.categories',
  'eggly.models.bookmarks'
])
  .config(function ($stateProvider) {
    $stateProvider
      //this bookmkars must be nested inside of categories
      .state('eggly.categories.bookmarks', {
        url: 'categories/:category',
        views: {
          'bookmarks@': {
            //template must come before controller
            templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
            controller: 'BookmarksListCtrl as bookmarksListCtrl'
          }
        }
      });
  })

  .controller('BookmarksListCtrl', function BookmarksListCtrl($stateParams, BookmarksModel, CategoriesModel){
    var bookmarksListCtrl = this;
    //bookmarksListCtrl.currentCategoryName = $stateParams.category;

    //use new methode from categories model and pass in stateparams.category which should is using the url I think
    CategoriesModel.setCurrentCategory($stateParams.category);

    BookmarksModel.getBookmarks()
      .then(function (bookmarks) {
      bookmarksListCtrl.bookmarks = bookmarks;
    });

    bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
    bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
    bookmarksListCtrl.deleteBookmark = BookmarksModel.deleteBookmark;


  });

