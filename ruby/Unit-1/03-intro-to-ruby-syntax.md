## Objectives

By the end of this lesson you should be able to:

* Use IRB to execute Ruby expressions
* Use `puts`, `p`, and `print` and describe the differences between them
* Work with the basic data types: `strings`, `numbers`, and `booleans`
* Explain the difference between Floats and Integers
* Do simple math with operators like `+`, `-`, `%`, etc.
* Use conversion methods like `.to_f`, `.to_i`, and `.to_s`
* Write single line and block comments
* Write simple conditional statements

As you begin to dive into the Ruby language consider the similarities between the two languages, as well as the differences. The most obvious difference is syntax:

#### JavaScript Function

```
// Function declaration in JavaScript

function greet() {
  return "Hello!"
}

// Calling a function in JavaScript

greet();
// => "Hello!"
```
#### Writing the same function in Ruby (except in Ruby it's called a method)

```
// Defining a method in Ruby

def greet
 "Hello!"
end

// Calling a method in Ruby

greet
=> "Hello!"

```

Notice a few things? Ruby doesn't use curly braces or semi-colons when defining
a method, nor does it need parenthesis to invoke the method. You also don't have
to use the `return` keyword in Ruby. It is implied. To be clear, you _can_ use it, but you don't need to.

What else is syntactically different?

What about declaring variables in Ruby vs JavaScript?

One of the great things about Ruby is that there is a _ton_ of documentation to
be found on the language. The Ruby community is huge and friendly.

But first, let's introduce you to your Ruby playground.

## Using IRB to Practice Ruby Syntax

So far in class, we've been using the Node REPL (Read-Eval-Print-Loop) to run
JavaScript and see immediate results. It turns out we can do the same thing with
Ruby using the [IRB shell](http://ruby-doc.org/stdlib-2.0.0/libdoc/irb/rdoc/IRB.html)

Just open Terminal and type `irb`

Start playing around with the Ruby syntax and see what basic operations and expressions
you can execute based on what you've learned so far. Here's a great resource to
get you started with some experiments.

Go to this link and start with "Declaring A Variable". (http://www.techotopia.com/index.php/Understanding_Ruby_Variables#Declaring_a_Variable)
Play around with the examples in `irb`. Then, explore some of the other
links and dive deeper.

What other similarities and differences between Ruby and JavaScript have you discovered?

Here are some more links to keep you going:

[Ruby vs JavaScript](http://www.rapidprogramming.com/questions-answers/difference-between-ruby-and-javascript-ruby-vs-javascript-1477)

[Javascript-to-Ruby Syntax Comparison Cheat Sheet from AgentCooper](http://agentcooper.io/js-ruby-comparison/)

Based on what you've learned so far,  use `irb` to get comfortable with the syntax for the following:

- String interpolation and concatenation
- Does Ruby have the `%` like JavaScript?
- Experiment with these Ruby methods and see what they do:
  - `.to_f`
  - `.to_s`
  - `.to_i`
- Do Ruby strings behave like JavaScript strings?
- What does it mean for an object to be mutable in programming?
- How can you do the following with a string in Ruby?
  - change a string to all uppercase
  - change a string to all lowercase
  - reverse a string
  - find the length of a string
  - return the 5th letter of a string?
  - turn a string into an array

What other methods do you get for free in Ruby?

To write a Ruby script and run it from the command line, simply create a new file
with an `.rb` extension, such as `hello.rb`. In the file, place the following:

```ruby
puts "Hello, world!"
```

NOTE: If we can run `.js` files from the command line by typing `node hello.js`,
how do you suppose we could run a ruby file from the command line?

If you didn't guess it, Google it.

Now, change the `puts` to `print` and run it again. Did anything change?
Now change `print` to `p`. Is the output the same?

Similar to using `console.log` in JavaScript, in Ruby we can use `print`
, `puts` and `p` to write to the command line. But there are slight
differences between the three. Take a minute to play around with them in `irb`
and make a mental note of those differences. Then do a little reading to help
clarify why you should care about these subtle differences and under what
circumstances you might choose one over another.

Go back to your `hello.rb` file.

In JavaScript, we comment out a line of code by using the double forward slash ` // ` but it's different in Ruby. How can you comment out a single line in Ruby? What about 10 lines? What's the quickest way to find out? Try simply using the same keyboard shortcut we've been using in JavaScript and see what happens? Or go to the docs!

### More on Ruby Methods

In your `hello.rb` file practice writing more variables and methods and see what else you can discover about the Ruby language. Go to the link below for guidance.

[Ruby Methods](http://www.tutorialspoint.com/ruby/ruby_methods.htm)

## Conditionals

Boolean logic in Ruby is very similar to JS.

```ruby
5 > 20
true || false
3 != 5 && 10 > 1
name == "Rusty" || name == "Momo"
```

All of our JS mainstays like `>`, `<`, `||`, and `&&` are back!  However, you'll notice that to test for equality we use `==` and for inequality we use `!=`.  There is a triple equals in Ruby, but that's for another day.

- Which values in Ruby are inherently truthy and which are falsy? Don't just look it up! Experiment in IRB.

We write Ruby conditionals using the following pattern:

```ruby
if condition
  something happens
elsif condition
  something else happens
else
  no conditions matched
end
```

For example:

```ruby
if my_bank_account_balance > 50.00
  puts "I'm eating steak!"
elsif my_bank_account_balance < 0
  puts "I'm eating paper"
else
  puts "I'm eating ramen :("
end
```

## Exercise

Write a bouncer program that asks a user for his/her age.  If the user is older than 21, print "You can drink".  If the user is between 18 and 21, print "You can watch the show, but no drinking!".  Otherwise, print out "Go home, kiddo".

## Keep Going!

Head over to [Ruby Monk](https://rubymonk.com/) and work through the first course, "Ruby Primer". Then head over to the [students.galvanize.com](https://students.galvanize.com) tool and fill out the Unit 1 Section 3 assessment.
