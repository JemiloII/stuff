## Testing with rspec

## Objectives
* Write basic tests using rspec
* Refactor simple tests to DRY them up using rspec
* Write a test suite giving a spec and build out the code to support that

### How to get started

Rspec is the testing framework we are going to be using for Ruby (including Rails). To get started:

`gem install rspec`

Once you have successfully installed rspec, create a new project:

1. rspec --init (this will create a .rspec and spec/spec_helper.rb file)
2. Inside your .rspec file make sure you have this text:

```
--color
--require spec_helper
--format documentation
```

The big one here is `--format documentation` which will print out a more descriptive list of your specs as opposed to the standard `....F.....*.....` format.

### Rspec matchers

Fortunately, the syntax is very similar to our previous testing matchers in node, here are just a few matchers, that should look similar to jasmine/mocha/chai.

```ruby
expect(actual).to be ___
expect(actual).to be_between(minimum, maximum).inclusive
expect(actual).to match(/expression/) # We will learn about this very soon!
expect(actual).to be true      # passes if actual == true
expect(actual).to be false     # passes if actual == false
expect(actual).not_to be_nil       # passes if actual is not nil
expect(actual).not_to be_instance_of(Class)       # passes if actual is not an instance of a certain Class
expect(actual).to exist        # passes if actual.exist? and/or actual.exists? are truthy
```

## Matchers

always have:

`expect().to ()` or `expect().not_to ()`

#### Equivalence Matchers

These are the most commonly used matchers.

`expect(x).to eq(1)` => ==

`expect(x).to eql(1)` => eql?

`expect(x).to equal(1)` => equal?
`expect(x).to be(1)` => equal?

- == is a way of testing loose equality (there is some flexibility such as 1 == 1.0)
- eql? can be used as well which is a value check `1.eql?(1.0) # returns false` this is value equality, it's comparing the 2 values to ensure equality. In _most_ cases this will operate the same as ==, with the exception of numeric types which will perform type conversion with == but not with eql?
- equal? - tests that both objects are the same objects (`"cat".equal?("cat")` will be false)

You will almost always want to just use eq, this will generally just do the right thing.

The rspec documentation is where you can find all the available matchers. You'll need to reference this list frequently when you're building tests. You can find those  [here](https://www.relishapp.com/rspec/rspec-expectations/v/3-1/docs/built-in-matchers).

### Writing your first test

Start with a `describe` block, and then add an `it` statement inside that block. `describe` should point to the overall context, a class or a method. And `it` will wrap each individual test case.

```ruby
require 'spec_helper'

describe "Some idea, class or method" do
  it "is something or does something" do
    # expect...
  end
end
```

Let's start with some very simple tests

```ruby
describe "Starting" do
  describe "something" do
    it "does something that passes" do
      expect(5).to eq(5)
    end

    it "does something that fails" do
      expect(5).to eq(3)
    end

    it "does something that is pending", pending: true do
      expect(5).to be < 3
    end

    xit "does something that is pending because we used xit" do
      expect(5).to be < 3 #this will be pending
    end
  end
end
```

### I'm getting errors!

1. Make sure you have done `rspec --init` so that you have a **.rspec** file and a *spec* directory with a **spec_helper.rb** file
2. Did you mean to do `require_relative` instead of `require`?
3. If you do use `require_relative`, make sure you have the exact path

## Exercise

Let's go back and add tests to some of the code we wrote previously. Remember the [Deaf Grandma exercise](https://github.com/gSchool/ruby-language-curriculum/blob/master/Unit-1/04-strings-numbers-loops.md#deaf-grandma) from chapter 4 of Unit 1? Let's add some tests to ensure that Grandma will respond correctly given user input. This may require you to refactor parts of your program to allow you to test the responses without requiring a user to type anything in.

#### Hooks

We use these to not repeat ourselves - got to stay DRY!

We can write hooks before, after or around our code.

##### Before/after hooks

```ruby
config.before(:suite) do
  # this code will run before all of your tests and goes in the .rspec file
end
```

```ruby
before(:context) do
  @user = User.new # create a new user that will be used for each of your tests
  # this runs the block of code once before any of the examples in an example groud are executed. An example group is defined by 'describe' or 'context' so before it runs anything inside that context, it will run that block of code. This can also be aliased as before(:all)
end
```

```ruby
before(:each) do
  # this runs the block of code once before each example. This can also be aliased as before(:example)
end
```

Before hooks run in sequential order (suite, context, example) but after hooks will run the other way (example, context, suite)

Remember, you need to use instance variables to make objects available to examples! We can't use local variables!

## Exercise

Refactor the tests that are in **examples/people** to use `before` hooks to dry up the code.

#### Let

Before hooks are very useful for setup inside your example groups. But if you're just setting up variables, then you should consider using RSpec's `let` method instead.

Sometimes before hooks are very expensive and reassign values every time.

Imagine if we had code like this

```ruby
before(:context) do
  def user
    @user ||= User.new
  end
end

it "allows reading for :legs"
  expect(user.legs).to eq(2)
end
```

Whenever this method is called, it will create a new instance or see if one exists. Essentially we are [memoizing](https://en.wikipedia.org/wiki/Memoization) our instance variable and saving a bunch of time by not re-initializing the variable every time.

Instead of writing all of this code, we can use the `let` method instead!

`let(:user) {User.new}`

Much better......

Now you may be wondering, if we have `let`, then why do we need before hooks? Before hooks are still very useful. And there's a lot of business and setup before your example groups that you can do with them. For example, maybe you want to populate your database with some data before your example group runs. A before hook is a great way to do that. But if you find your before hook is only assigning values to instance variables, then use `let`.

One additional benefit to this being a method is that it doesn't actually execute for the first time until we call it. So if in an example group, we have four examples that never even call car, then that block of code never runs. It's only once the fifth example, that does need car, calls it, that that code is run for the first time. So, it's called lazy execution. It only loads when we finally need it, when we finally call it.

We can also add a `!` after `let` to eagerly load it, but this is less common because we should not need to load the method until it is necessary (lazy loading)

##### In short - `let` gives us memoization and lazy execution without creating any instance variables.

## Exercise

Refactor the specs in **examples/people** to utilize `let` instead of a `before` hook. This should read a bit better than the previous version with a `before` hook.

## Exercise

Let's put everything we've talked about to use. Go through the specifications in the repo linked below and build out specs to support them, then implement the code to make your specs pass. This will utilize all the things we've worked with so far.

https://github.com/gSchool/animal_tdd_rspec
