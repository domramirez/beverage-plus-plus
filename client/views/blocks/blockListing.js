/**
 * Created by DomRamirez on 3/16/2016.
 */

Template.blockListing.helpers({
	totalPercent: function()
	{
		var template = Template.instance();
		var category = template.data.category;
		var allCategories = DB.categories.find().fetch();
		var totalCount = 0;

		for(var i = 0; i < allCategories.length; i++)
			totalCount += allCategories[i].count;

		if(0 == totalCount)
			return '0%';

		return category.count / totalCount * 100 + '%'
	}
});

Template.blockListing.events({
	'click .plusOne': function(e, template)
	{
		//Get the category record's ID from the data provided to template
		var categoryId = template.data.category._id;

		//Call our increment function on the server
		Meteor.call('incrementBeverageCount', categoryId, function(err, result){

			if(err)
				alert("Shoot! We had a problem connecting to the server. Try +1'ing again");

		});
	}
});