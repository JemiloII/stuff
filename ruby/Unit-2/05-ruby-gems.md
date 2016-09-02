### Ruby Gems

Ruby provides an awesome way to distribute programs and libraries: Gems.


You can think of a Ruby Gem as a library or plug-in, some code that someone has written that is packaged in nice installable gem. It’s provides some functionality that you’ll install to fill a specific need. Here are some practical problems that gems solve:

* Want a quick-n-easy REST framework? - Rails and Sinatra are both gems.
* Need to send emails?
* Want to set up a web server?
* Need a testing framework?
* Want to convert Markdown to HTML?
* Want to upload pictures to your app?

Since we are a using ruby version > 1.9, we do not need to install RubyGems.  It is built in for us.  You can check with ``` gem -v ``` in your terminal.


Example.

Let's change our first_sinatra_app to use haml instead of erb.


In first_app.rb change code to:

```
require 'sinatra/base'

class MyApp < Sinatra::Base

    get '/' do
        haml :root  # renders the root.erb page in the views directory
    end

    get '/greeting' do
      haml :greeting, :locals => { :salutation => "Aloha", :name => "Spencer"}
    end

    run! if app_file == $0

end
```

Change greeting.erb to greeting.haml and change code to:
```
%h1 greeting.erb
%h1
  =salutation
  =name
%h1 This is the greeting page
%a{href:'/'}
  %p Back to root page

```

Change root.erb to root.haml and change code to.
```
%h1 root.erb
%h1 Hello, World!
%h3 This is my first app
%a{ href: "/greeting"}
  %p Go to greeting

```
Stop and start your server.  Why doesn't your app work?

Run,
```
  gem install haml
```

Check and see if you have it installed
```
  haml -v
```

Now start and stop your server.  

Continued:

###Read about bundler 
- you will use bundler in Rails. http://bundler.io/
