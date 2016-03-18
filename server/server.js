/**
 * Created by DomRamirez on 3/17/2016.
 */

Meteor.methods({
	incrementBeverageCount: function(categoryId)
	{
		//If the user is logged in, increment count on category document
		if(Meteor.userId())
			DB.categories.update({_id: categoryId}, {$inc: {count: 1}});
	}
});