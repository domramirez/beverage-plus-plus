/**
 * Created by DomRamirez on 3/16/2016.
 */

Router.route('/', function ()
{
	this.layout('layoutBase');
	this.render('blockHeader', {to: "header"});
	this.render('pageHome', {to: "content"});
});