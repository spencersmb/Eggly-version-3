angular.module('categories', [
  'eggly.models.categories'
])

  .config(function ($stateProvider) {
    $stateProvider
      .state('eggly.categories',{
        url: '/',
        views:{
          //these target the categories as an absolute so it will target anything in this section
          'categories@': {
              controller: 'CategoriesListCtrl as categoriesListCtrl',
              templateUrl: 'app/categories/categories.tmpl.html'
          },
          'bookmarks@': {
              controller: 'BookmarksListCtrl as bookmarksListCtrl',
              templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
          }
        }
      })
  })
  .controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel){
    var categoriesListCtrl = this;

    CategoriesModel.getCategories().then(function (result) {
      categoriesListCtrl.categories = result;
    });

    categoriesListCtrl.isCurrentCategory = CategoriesModel.isCurrentCategory;

  })

;