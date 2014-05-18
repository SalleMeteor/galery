Pictures = new Meteor.Collection('pictures');


Meteor.methods({
  picture: function(pictureAttributes) {
    var user = Meteor.user(),
      pictureWithSameLink = Pictures.findOne({url: pictureAttributes.url});
	
	
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");

    // ensure the post has a title
    if (!pictureAttributes.title || !pictureAttributes.url )
      throw new Meteor.Error(422, 'Please fill in a headline');

    // check that there are no previous posts with the same link
    if (pictureAttributes.url && pictureWithSameLink) {
      throw new Meteor.Error(302, 
        'This picture has already been posted', 
       pictureWithSameLink._id);
    }

    // pick out the whitelisted keys
    var picture = _.extend(_.pick(pictureAttributes, 'url', 'title', 'text'), {
      userId: user._id, 
      author: user.username, 
      submitted: new Date().getTime()
    });
		Pictures.insert(picture);
  }
});
