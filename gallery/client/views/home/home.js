Template.home.created = function () {
  Session.set('currentPage', 'picturesList');
}
Template.home.helpers({
  page: function(page) {
    return Session.equals('currentPage', page);     
  }
});

  
