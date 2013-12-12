# StackSocial Full Stack Rails Challenge

This challenge is designed to test your skill with:

* Ruby on Rails
* Consuming RESTful APIs
* User sessions and authentication
* Front-end design and functionality
* Git
* Deploying to the cloud

**This should take you about 2.5 hours without all the bonus work.**

1. Create a Rails app that, does the following:
    * Is hosted on [Heroku](http://heroku.com) (you should be able to use the free plan)
    * Requires an authenticated login to access
    * Consumes the [Twitter API](https://dev.twitter.com/docs/api)
    * When logged in defaults to an overview page showing the Twitter user, time, and content of the last 20 tweets for a certain term
    * Allows the user to specify a search term on the overview page (defaulting to something relevant)
    * When clicking on the name in a tweet, you are taken to a user page showing the Twitter user, time, and content of the last 20 tweets for any given Twitter user (linked to from overview)
    * Uses Bootstrap or Foundation to make the pages pretty
1. Implementation requirements:
    * Writing tests!
    * Caching identical API calls for ~5min to avoid hammering the Twitter API
    * Logging queries to a database and having a page to show a log
    * Parsing @mentions in tweets and linking to the status pages for those
    * Pulling in user profile images
    * Using Javascript to show user information in a modal when clicked or hovered on
1. Email a link to your working Heroku app and github repo with the code to `devs@stacksocial.com`

Feedback is welcome if you found it too easy/hard/whatever.
