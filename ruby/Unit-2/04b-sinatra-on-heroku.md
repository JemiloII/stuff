## Deploy Sinatra to Heroku

### Create a Gemfile and a config.ru file

* create a Gemfile in the top directory of your app

	Gemfile:

		source 'https://rubygems.org'
		gem 'sinatra'

* create a config.ru file in the top directory of your app

	config.ru

		require './first_app'
		run MyApp


* run bundle install

		$ bundle install

### First push to Github
* Go to Github and create a repository.
* Follow instructions on Github to push your code to the repository.

### Then push to Heroku

* Prepare same directory for Heroku depoyment

		$ heroku create

* Push to Heroku

		$ git push heroku master

* Open the website you just created

		$ heroku open


### Resources

* heroku dev center instructions:

	https://devcenter.heroku.com/articles/rack
