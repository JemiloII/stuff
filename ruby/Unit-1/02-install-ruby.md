# Install Ruby

## Objectives
* Install Ruby
* Run a ruby script from the command line

## Install rvm

[rvm](https://rvm.io/) is the most popular Ruby Version Manager. It helps us upgrade and downgrade to different versions of Ruby.

`curl -sSL https://get.rvm.io | bash -s stable`

### Use RVM

Install the latest Ruby release to get the latest and greatest Ruby experience.

`rvm install 2.2.3`

## Confirm install
To make sure everything worked properly you should be able to run `ruby -v` in the terminal and see something like `ruby 2.2.3p173 ...`spit out.

You should also be able to run the `hello-world.rb` file in the examples directory by running `ruby examples/hello-world.rb` from the root of this repo's directory.
