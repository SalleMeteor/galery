Template.pictureSubmit.events({
  'submit form': function(e) {
    var picture = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      text: $(e.target).find('[name=message]').val()
    }
	Meteor.call('picture', picture, function(error, id) {
		if (error){
			return alert(error.reason);
		}	
	}); 
     
  }
});

