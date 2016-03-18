/**
 * Created by DomRamirez on 3/16/2016.
 */

Template.blockHeader.events({
	'click .logout': function(e, template)
	{
		Meteor.logout();
	}
});