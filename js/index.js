$(function () {

	var Tweet = Backbone.Model.extend({
		defaults: function() {
			return {
				author: 'def',
				status: ''
			}
		}

	});

	var TweetList = Backbone.Collection.extend({
		model: Tweet
	});

	var tweetList = new TweetList();

	$("#button_add").click(function() {
		var tweet = new Tweet({author: $("#author_name").val(), status: $("#status_name").val()});

		tweetList.add(tweet);
		console.log(tweetList.toJSON());
	});

	
    

    

    
});
    