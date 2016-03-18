/**
 * Created by DomRamirez on 3/16/2016.
 */

UI.registerHelper('isLoggedIn', function()
{
	//Return true if the user is logged in
	return !!Meteor.userId();
});