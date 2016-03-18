/**
 * Created by DomRamirez on 3/16/2016.
 */

Template.pageHome.helpers({
	categories: function()
	{
		//Get category records from local version of database
		return DB.categories.find().fetch();
	}
});