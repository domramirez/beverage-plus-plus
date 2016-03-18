/**
 * Created by DomRamirez on 3/17/2016.
 */

Meteor.methods({
	incrementBeverageCount: function(categoryId)
	{
		DB.categories.update({_id: categoryId}, {$inc: {count: 1}});
	}
});