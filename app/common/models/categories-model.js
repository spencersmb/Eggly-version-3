angular.module('eggly.models.categories', [

])
  .service('CategoriesModel', function ($http, $q) {
    var model = this,
        URLS = {
          FETCH: 'app/data/categories.json'
        },
        categories,
        currentCategory;

    //before we send data to ctrl - we extract it here
    function extract(result) {
      return result.data
    }

    function cacheCategories(result) {
      categories = extract(result);
      return categories;
    }

    //instead of just returning the call - return a promise using then for the http call
    //This also checks first if categories exists and if it does wrap it in a promise so you dont make another call to the server
    model.getCategories = function(){
      return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
    };

    model.setCurrentCategory = function(categoryName){
        return model.getCategoryByName(categoryName).then(function (category) {
          currentCategory = category;
        })
    };

    model.getCurrentCategory = function () {
      return currentCategory;
    };

    model.getCurrentCategoryName = function () {
      return currentCategory ? currentCategory.name : ''
    };

    model.isCurrentCategory = function (category) {
      return currentCategory != '' && category.name === currentCategory.name;
    };

    //this allows us to manually accpet or reject a promise
    model.getCategoryByName = function (categoryName) {
      //create a deferred object
      var deferred = $q.defer();

      function findCategory() {
          //finds a match if one exists when we call getCategoryByName
          return _.find(categories, function (c) {
            return c.name == categoryName;
          })
      }


      //if it exists just loop over it and resolve the promise with that value
      if(categories){
        deferred.resolve(findCategory());
      } else {
        //if it doesnt make a call to the server then loop over it and return the promise
        model.getCategories().then(function (result) {
          deferred.resolve(findCategory());
        })
      }

      //then return that with a promise
      return deferred.promise;
    }
  })
;