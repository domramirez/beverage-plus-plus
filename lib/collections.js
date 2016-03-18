/**
 * Created by DomRamirez on 3/16/2016.
 */

DB = {
	categories: new Mongo.Collection('categories')
};

/** DATA MODELS
   	categories:
    {
		icon: 'bolt',
		label: 'Energy Drinks Drank',
		count: 0
    }
 */

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