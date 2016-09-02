# Ruby Methods

## Objectives
* Define methods
* Invoke methods
* Define methods with parameters
* Pass arguments to a method
* Define default argument values
* Use explicit and implicit returns in a method definition

Methods in Ruby are similar to functions in JavaScript. The syntax is different, but the concept is the same. Here's what a typical method definition looks like:

```ruby
def my_name
  return 'Zoo Lander'
end
```

#### Vocabulary to remember:
* `def` is a keyword in Ruby for defining methods.
* `my_name` is the name of the method that is being defined.
* `return 'Zoo Lander'` is the body of the method that is executed when the method is called.
* `end` is a keyword in Ruby for indicating the method definition is complete.

## Defining Methods

### Basic method

```ruby
def say_hi
  return 'Hi...'
end
```

This could also be used without the explicit `return` statement because Ruby has implicit returns. That is to say, a Ruby method will automatically return the last evaluated statement in a method.

```ruby
def say_hi
  'Hi...'
end
```

### Invoke methods

Invoking a method in Ruby is simple. Just call it by name!

```ruby
say_hi
# => 'Hi...'
```

### Method with parameters

Defining parameters in Ruby is pretty simple. Just list them inside of parenthesis.

```ruby
def silly_greeting(first_name, last_name)
  return  "Hello! I am SO THRILLED to FINALLY meet you #{first_name} #{last_name}!!!!!"
end
```

### Passing arguments to methods

The parenthesis in Ruby are optional, so you may pass arguments to the `silly_greeting` method with or without them like so:

```ruby
silly_greeting 'Elon', 'Musk'
```

or

```ruby
silly_greeting('Elon', 'Musk')
```

### Default arguments

You can define methods that accept arguments, but gracefully fall back to default settings.

```ruby
def greet(name='there')
  "Hi #{name}!"
end
```

In this way, you can invoke the method with the following arguments and results.

With an argument:

```ruby
greet 'Link'
# => 'Hi Link!'
```

With no arguments:

```ruby
greet
# => 'Hi there!'
```

In Javascript, you can freely omit arguments when calling functions. What happens if our function definition requires an argument but we don't provide one?

```ruby
def greet(name)
  "Hi #{name}!"
end

greet
# ?
```


# Method Exercises

Create a simple temperature convertor. It should function like the example below:

![](https://draftin.com:443/images/13724?token=zVWxJv7jYF2MSoHWlqkt9ZtYK2Qh7fbYFeaKG2pDvemKymvCpeYPXJLnhhBvxKqWaWJnOyDFzNvoAA4BBiZhpXk)

***

### Guessing Game

Create a program that asks the user to guess a number between 1 and 100. Once the user guesses a number, the program should say, higher, lower, or tell the user that he got the number correct. The user should continue to make guesses until he guesses correctly. Also, once the user guesses correctly, the program should print the number of guesses needed to arrive at the correct answer. Below is sample output:

```
Guess a number between 1 and 100
50
The number is lower than 50.  Guess again
25
The number is lower than 25.  Guess again
13
The number is higher than 13.  Guess again
20
The number is lower than 20.  Guess again
17
The number is higher than 17.  Guess again
18
The number is higher than 18.  Guess again
19
You got it in 7 tries
```

Hint! Check out the Random class for picking a number.

***

#Simple Ascii Art

Using loops (don't just use a bunch of puts statements!), print out a simple ascii art triangle like the one below:

![](https://draftin.com:443/images/13723?token=BHmxwC8rvczzKIKooWZKKld4NS38dPkrPtoReNRRJPZ2UgF_IYKWQT4ChqNZtyzCQm0wIlGE_oGff-UP2PH-ysc)

If you would like an extra challenge, try asking the user for the number of rows the pyramid should consist of. Here's an example:

![](https://draftin.com:443/images/13722?token=gNud-NApI2IV1pRGx7nAbw2gs_NZTyOLfCCBT9rroZYPhVrQcjCdlJbjhPQkp134rW-GKdNBOYkHUryR7OwIk4g)

***

### Multiplication Table

Create a 9 x 9 multiplication table like the one below.  Make sure to pay attention to spacing!  Make it look nice!  

![](https://draftin.com:443/images/13725?token=2nclsCLsp6kbIUTevUOuWYh559el-kar1a13oQHazAZPXq_rmQDhMFcFFGQWibEbqNk8PYTbq2QrDn0K2RBqkog)

For an extra challenge, allow the user to specify the size of the multiplication table (3 x 10, 5 x 5, etc.)

### Reverse A String
Unlike JavaScript, in Ruby nearly everything is mutable. That means you can modify a string without creating a new string. In this exercise, you should reverse a string in place. In other words, do not create a new string or use other methods on the string such as ```reverse```. The goal of the problem is to use a loop and the string accessors to figure out which values to swap for other values.  Below is the output.

```
Enter a string
reverse_me
em_esrever
```

## Further Reading on Methods
* [Ruby Methods](http://www.techotopia.com/index.php/Ruby_Methods)

# Method Scope
With the introduction of methods, the code we write now creates local variables that aren't available globally. Let's take a look at what I mean:

```ruby
  def do_something
    done = true
  end

  done
  # NameError: undefined local variable or method `done' for main:Object
	#    from (irb):5
	#    from /Users/baccigalupi/.rvm/rubies/ruby-2.1.2/bin/irb:11:in `<main>'
```

As you can see, the local variable that was defined inside the method is not available
outside that method.

This is why Ruby has instance variables, to span scope. *Note:* These instance variables (the ones with the `@`) should only be used inside of classes (a topic covered in Unit 2).

```ruby
  def do_something
    @done = true
  end

  do_something
  @done
  # => true
```

It turns out this is true of arguments too.

```ruby
  def set_done(doneness)
    done = doneness
  end

  doneness
  # NameError: undefined local variable or method `doneness' for main:Object
  #    from (irb):5
  #    from /Users/baccigalupi/.rvm/rubies/ruby-2.1.2/bin/irb:11:in `<main>'
```

Blocks will also generate a scope that is used for the arguments passed into the block, as well as the local variables defined within the block.

```ruby
  (1..10).each do |n|
    local = n
  end

  n
  # NameError: undefined local variable or method `n' for main:Object
  #    from (irb):5
  #    from /Users/baccigalupi/.rvm/rubies/ruby-2.1.2/bin/irb:11:in `<main>'

  local
  # NameError: undefined local variable or method `local' for main:Object
  #    from (irb):5
  #    from /Users/baccigalupi/.rvm/rubies/ruby-2.1.2/bin/irb:11:in `<main>'
```

Unlike JavaScript, local variables don't flow into new local scopes. JavaScript creates closures around outside variables to ensure that functions can modify those. Ruby will not do this for methods, but has it's own way of creating closures that we'll discuss a bit later on. Instance variables can be used to work around this. Global variables can also be used to work around this, but we'll generally avoid those. A global variable is defined with a `$` as the first character instead of the `@`.

```ruby
  done = false

  def do_something
    done = true
    puts "Something is currently done? #{done}"
  end

  do_something
  p done
  # => false
```

It seems tedious, but is pretty important to think about scope.

## Exercise

## Self Assessment

What does this code print?

```ruby
x = "HELLO"
if true
  puts x
end
```

What does this code print?

```ruby
if true
  y = "Baaaaah"
end
puts y
```

Identify the elements of this code (vocabulary check):

```ruby
def sum(a, b)
  a + b
end
```

What is the difference between the code in the previous example and this code?

```ruby
def sum(a, b)
  return a + b
end
```

Define a method called funify() that takes an array as an argument and adds the word "fun" to the end of the array.

Define a method called more_fun() that replaces the first element of an array with the word "FUN FUN".

Define a method called increment_variable() that takes a variables as an argument and adds one to it.

What does the following code print?
```ruby
def blah()
  my_var = "my_var has been defined"
end

puts my_var
```

What does the following code print?
```ruby
def cray()
  lyric = "Stuff is cray cray"
  puts lyric
end

cray()
```

# Assessment

Head over to the [students.galvanize.com](students.galvanize.com) tool and fill out the Unit 1 Section 5 assessment.
