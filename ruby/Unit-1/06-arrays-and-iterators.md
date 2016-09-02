# Ruby [Array](http://en.wikipedia.org/wiki/Array_data_structure) Basics

## Objectives

* Create arrays, and perform simple operations on them
* Write programs that iterate over arrays

## Collections are important for grouping things

In the world we work with groups of things: a bunch of bananas, a team of workers, a forest of trees.

Sometimes the order of collections is important. For example, imagine a list of students
in this class. What if we ordered that list by what date the student was accepted. If we
printed out that list of students in order, we could know at a glance whether one student
was enrolled before or after another student.

One type of an ordered list in Ruby – and in many other languages, including JavaScript – is an Array.

There are other types of collections though. Imagine that you wanted to organize some data about a person. For any given person, the collection of data will include their first name, their last name, an email, and maybe a phone number. You want all this information grouped together, but you need to easily grab the email and know that you are not getting the phone number instead.

In Ruby, the Hash collection type allow programmers to associate keys with values.
It is very similar to objects in javascript, except without the dot notation for accessing values. Other languages call this
construct a **dictionary** because labels are defined by their values, or an **associative array**
because the value is associated with the label or key.

It is really rare to do any work in Ruby that does not involve both Arrays and Hashes. We
need to become intimately familiar with both. This lesson will cover Arrays and the next will cover Hashes.

## Arrays

Arrays are ordered lists, and in Ruby they are syntactically bound by square brackets: `[1, 2, 3]`.

You also use square brackets to access members by index. __Indexes start at zero.__

```ruby
  student_names = ["Jane", "Jeff", "Jan"]
  # => ["Jane", "Jeff", "Jan"]

  student_names[0]
  # => "Jane"

  student_names[2]
  # => "Jan"
```

Like strings, arrays come prepackaged with all kinds of
[magic methods](http://www.ruby-doc.org/core-2.1.2/Array.html).

It turns out strings are collections too.

You can see that the method `#at` will also work for accessing elements by index:

```ruby
  student_names.at(0)
  # => "Jane"
```

It's nice that this `#at` method is here, but you don't typically see this done.
Other methods are much more useful and frequently used.

```ruby
  student_names.length
  # => 3

  student_names.count
  # => 3

  student_names.size
  # => 3
```

Ruby aliases lots of method names to get the most intuitive fit for engineers. You don't have to know all these methods, but you need to have a sense that they exist so you can look them up.

Collections in many languages use methods for adding and removing items in different ways to an array.

`#push` will add an element to the back of an array.
`#unshift` adds an element to the front of the array:

```ruby
  student_names.push("John")
  # => ["Jane", "Jeff", "Jan", "John"]

  student_names.unshift("Adam")
  # => ["Adam", "Jane", "Jeff", "Jan", "John"]
```

`#unshift` is a pretty weird method name. The 'un' part pairs it with another method `#shift` that takes things
off the top of the array.

```ruby
  student_names.shift
  # => "Adam"

  student_names
  # => ["Jane", "Jeff", "Jan", "John"]

  student_names.unshift("Alice")
  # => ["Alice", "Jane", "Jeff", "Jan", "John"]
```

So what is the opposite of push then? `#pop`.

```ruby
  student_names.pop
  # => "John"

  student_names
  # => ["Alice", "Jane", "Jeff", "Jan"]
```

You can also insert and remove things in the middle of an array.

```ruby
  student_names.insert(2, 'Annabelle')
  # => ["Alice", "Jane", "Jeff", "Annabelle", "Jan"]
```

You can remove objects either by index or by value. In both cases the thing
being deleted is returned.

```ruby
  student_names.delete("Annabelle")
  # => "Annabelle"
  student_names
  # => ["Alice", "Jane", "Jeff", "Jan"]

  student_names.delete_at(0)
  # => "Alice"
  student_names
  # => ["Jane", "Jeff", "Jan"]
```

We can even delete items if they meet a certain criteria:

```ruby
  student_names.delete_if {|name| name.start_with?("J") }
  # => []

  student_names
  # => []
```

We have been constructing arrays that hold just one type of thing. But Ruby allows
arrays of many different types of things:

```ruby
  ['gerbil', 3.14, Time.now]
```

Because you can store anything in an array, you can even store an array inside.
This leads to something called nested arrays or multi-dimensional arrays.

```ruby
  weird_collection = [nil, 2, [1,2,3]]

  weird_collection[2][2]
  # => 2
```

But watch out! Trying to call methods on things that aren't there may cause an error.

```ruby
  weird_collection[0]
  # => nil

  weird_collection[0].at(0)
  # NoMethodError: undefined method `at' for nil:NilClass
	#    from (irb):7
	#    from /Users/baccigalupi/.rvm/rubies/ruby-2.1.2/bin/irb:11:in `<main>'
```

On a software design level, when you mix types of objects in an array you have
to remember lots of details about how that data is organized. When that memory fails
or isn't transferred to other developers, bugs proliferate. If you find yourself
needing an array within an array, you probably need to build a custom object or
two instead.

### Ranges

Ranges are like arrays except a little less useful, and a little more conceptual.
They define a range of values. It is most common to see these used with numbers and times.
Here is what they look like:

```ruby
  # given a variable my_number containing, a number
  (1..5).include?(my_number)
  # => true

  (1..5).to_a
  # => [1, 2, 3, 4, 5]

  (-1..-10).to_a
  # => []

  (-10..-1).to_a
  # => [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]

  # given variables start_time and end_time which both contain times
  (start_time..end_time).include?(Time.now)
```

One important thing to note is that ranges always go from a _lower_ value to a _higher_ value. If you wanted the reverse of a range, you would simply reverse it afterwards:

```ruby
  (-10..-1).to_a.reverse
  # => [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
```

You can even use variables for either the start or end points.

```ruby
  guess = 4
  x = 3
  (0..x).include?(guess)
  # => false
```

## Resources

* Online Materials
  * [Treehouse blog](http://blog.teamtreehouse.com/ruby-arrays)
  * [Array Docs](http://www.ruby-doc.org/core-2.1.2/Array.html)

## Exercises

### Fruits Array

Write ruby code that does all of the following. You can access the exercise array in `examples/fruits.rb`.

* Print the length of the array
* Print the index of `bananas`
* Without modifying the original array, insert the fruit 'raspberries' between 'apples' and 'oranges' and print the new array
* Print out the character length of each kind of fruit
* Print out an array with all of the fruit names uppercased
* Print out only the fruits that contain the letter 'g'

### Friends Array
Write a program, in a file called friends.rb, that asks for the name of your friends. The program will loop until you put in an empty line. Then, print back the names of all of your friends.

* Print all of the friend names sorted in alphabetical order.
* Print out all of the friend names in the reverse order that you typed them.
* Print out all of the names in reverse alphabetical order.
* Print out a nested array where each sub-array is two elements; the friend's name, and the length of their name.

## Further Reading

* http://rubylearning.com/satishtalim/ruby_arrays.html
* http://www.tutorialspoint.com/ruby/ruby_arrays.htm
