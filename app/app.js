angular.module('Eggly', [
  'ngAnimate',
  'ui.router',
  'categories',
  'bookmarks'
])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('eggly', {
      url:'', //dont usee / in the url for main index
      abstract: true
      //templateUrl: 'app/categories/categories.tmpl.html',
      //controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('/');

})

//.controller('MainCtrl', function ($scope) {
//    //setup fake data initially
//
//
//
//    //setting current category on load
//    $scope.currentCategory = null;
//
//    //set current based on click
//    function setCurrentCategory(category){
//      $scope.currentCategory = category;
//
//      //when you click on a new category reset the values to false to close them
//      cancelCreating();
//      cancelEditing()
//    }
//
//    //if current != null and the names match it will return true
//    function isCurrentCategory(category) {
//     return $scope.currentCategory != null && category.name === $scope.currentCategory.name;
//    }
//
//    //make available to scope using 'revealing pattern'
//    $scope.setCurrentCategory = setCurrentCategory;
//    $scope.isCurrentCategory = isCurrentCategory;
//
//
//    //----------------------------------------------------------------
//    // CRUD
//    //----------------------------------------------------------------
//
//    function resetCreateForm () {
//
//      $scope.newBookmark = {
//        title: '',
//        url: '',
//        category: $scope.currentCategory
//      }
//
//    }
//
//    //uses the length to set the id so the are consecutive
//    function createBookmark(bookmark){
//
//      //create new id before we push item to array.
//      bookmark.id = $scope.bookmarks.length;
//      $scope.bookmarks.push(bookmark);
//
//      //Reset bookmark
//      resetCreateForm();
//    }
//
//    $scope.editedBookmark = null;
//
//    //undo 2 way data binding using angular.copy
//    function setEditedBookmark(bookmark) {
//      $scope.editedBookmark = angular.copy(bookmark);
//
//    }
//
//    function updateBookmark(bookmark){
//      //get index of the bookmark we are editing
//      var index = _.find($scope.bookmarks, function(b){
//
//        //compare current bookmark ID with the bookmark id that we passed in
//        //it loops through every id in bookmarks and matches it to bookmark.id that we passed in
//
//        return b.id == bookmark.id;
//      });
//
//      //if we pass in bookmark 8 it will return 8 using our index function and we set
//      //the old bookmark to the new bookmark object using index
//      $scope.bookmarks[index.id] = bookmark;
//
//      //then reset the properties
//      $scope.editedBookmark = null;
//      $scope.isEditing = false;
//    }
//
//    //active bookmark state
//    function isSelectedBookmark(bookmarkID) {
//      return $scope.editedBookmark !== null && $scope.editedBookmark.id == bookmarkID ;
//    }
//
//    //remove item from bookmarks collection
//    function deleteBookmark(bookmark) {
//      $scope.bookmarks.splice(bookmark.id,1);
//    }
//
//
//    $scope.createBookmark = createBookmark;
//    $scope.setEditedBookmark = setEditedBookmark;
//    $scope.updateBookmark = updateBookmark;
//    $scope.isSelectedBookmark = isSelectedBookmark;
//    $scope.deleteBookmark = deleteBookmark;
//
//
//
//
//    //----------------------------------------------------------------
//    // CREATING AND EDITING STATES
//    //----------------------------------------------------------------
//
//    //onLoad states are false and we hide them
//    $scope.isCreating = false;
//    $scope.isEditing = false;
//
//    function startCreating() {
//      $scope.isCreating = true;
//      $scope.isEditing = false;
//
//      //reset form just in case
//      resetCreateForm();
//    }
//
//    function cancelCreating() {
//      $scope.isCreating = false;
//    }
//
//    function startEditing() {
//      $scope.isCreating = false;
//      $scope.isEditing = true;
//    }
//
//    function cancelEditing() {
//      $scope.editedBookmark = null;
//      $scope.isEditing = false;
//    }
//
//    //functions determin whats true and false
//    //show if currentCategory is defined and if we are not editing
//    //Only shows if you are in a currentCategory
//    function shouldShowCreating(){
//      return $scope.currentCategory &&  !$scope.isEditing;
//    }
//
//    //only shows if you click on a pencil
//    function shouldShowEditing(){
//      return $scope.isEditing && !$scope.isCreating;
//    }
//
//    $scope.startCreating = startCreating;
//    $scope.cancelCreating = cancelCreating;
//    $scope.startEditing = startEditing;
//    $scope.cancelEditing = cancelEditing;
//
//    $scope.shouldShowCreating = shouldShowCreating;
//    $scope.shouldShowEditing = shouldShowEditing;
//
//
//
//  })

;
