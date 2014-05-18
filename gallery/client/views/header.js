Template.header.events({
	'click input#add': function(e) {	
     Session.set('currentPage', 'pictureSubmit');
       console.log("currentPage variable = ", Session.get('currentPage'));
	},	
	'click input#view': function(e) {	
     Session.set('currentPage', 'picturesList');
     console.log("currentPage variable = ", Session.get('currentPage'));
	}
});
