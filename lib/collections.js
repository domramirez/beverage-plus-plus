/**
 * Created by DomRamirez on 3/16/2016.
 */

//Personal preference. Creating a global object from which I can access all of my collections.
DB = {
	categories: new Mongo.Collection('categories')
};

if (Meteor.isClient)
{
	//Get categories collection from server
	Meteor.subscribe('categories');
}

if (Meteor.isServer)
{
	//Allow client to get categories collection
	Meteor.publish('categories', function(){

		//Return the contents of the categories collection. Data can be modified before sending if need be.
		return DB.categories.find();
	});

	//Set rules around how users can modify data
	DB.categories.allow({
		insert: function(userId, doc)
		{
			return false;
		},
		update: function(userId, doc, fields, modifier)
		{
			return false;
		},
		remove: function(userId, doc)
		{
			return false;
		}
	})
}


/** EXAMPLES
	DB.categories.insert({
		icon: 'bolt',
		label: 'Energy Drinks Drank',
		count: 0
	});

	DB.categories.insert({
	    icon: 'coffee',
		label: 'Cups of Coffee Sipped',
		count: 0
	});

	DB.categories.insert({
	    icon: 'beer',
		label: 'Responsibly Imbibed Beers',
		count: 0
	});
 */