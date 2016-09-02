## Hashes

Ruby hashes are key-value pair collections; they're known as dictionaries in many other languages, and objects in JavaScript.

```
 person = {
    "first_name" => 'Arthur',
    "hobby" => 'Lock Picking',
    "email" => 'arthurMiller@yahoo.com'
  }
```

We access data from a hash use `[]`:

```
puts person["first_name"]
```

We can change values in a hash using the same syntax:

```
person["email"] = "artMiller@yahoo.com"
```

Read all about Hashes [here](http://ruby-doc.org/core-2.2.0/Hash.html)

####EXERCISE: Using the following `holiday_supplies` hash, figure out the syntax to fetch the value "tree"

```ruby
holiday_supplies = {
  "winter" => {
    "Christmas" => ["lights", "tree"],
    "New Years" => "champagne glasses"
  },
  "summer" => {
    "July Fourth" => ["BBQ", "flags"]
  },
  "spring" => {
    "Memorial Day" => "BBQ"
  },
  "fall" => {
    "Labor Day" => "hot dogs"
  }
}
```

Ruby provides an easier way to write Hashes using symbols as keys.

```ruby
class_info = {
  instructor: {
    first_name: 'Tim',
    last_name: 'Garcia',
    email: 'tim@badassmofo.com'
  },
  students: ['Aaron', 'Luke', 'Logan']
}
```

Anything can be a key in a Hash, but in most cases you can just stick to strings and symbols. Here are a few examples of other types of keys:

```ruby
  weird_hash = {
    1 => 'the number one',
    [1,2,3] => [4,5,6]
  }

  weird_hash[1]
  # => 'the number one'

  weird_hash[[1,2,3]]
  # => [4, 5, 6]

  weird_hash[[1,2,3]][1]
  # => 5

  just_a_bad_idea = {
    {mind: "blown"} => "is it a key? is it a value?"
  }

  just_a_bad_idea[{mind: "blown"}]
  # => "is it a key? is it a value?"
```

Hashes are super useful utility packs for collecting associated data.

```ruby
  {
    first_name: 'Link',
    weapon: 'Master Sword',
    email: 'Link@galvanize.com'
  }
```

It turns out that these things can get very deeply nested:

```ruby
  class_info = {
    instructor: {
      first_name: 'Link',
      weapon: 'Master Sword',
      email: 'Link@galvanize.com'
    }
  }
```

Getting data back out of these things looks very similar to accessing arrays by index.
We use the square brackets:

```ruby
  class_info[:instructor]
  # => {:first_name=>"Link", :weapon=>"Master Sword", :email=>"Link@galvanize.com"}
```

Notice how we used `:instructor` as the key to access the data. `:instructor` is a
symbol, which in Ruby is like a string with some important differences. Symbols
don't have many methods. They work mostly as labels and names. Symbols are immutable,
and will always be equivalent to another symbol of the same name. They can be created
using the symbol literal, or by passing a string such as:

```ruby
  class_info[:instructor]
  # => {:first_name=>"Link", :weapon=>"Master Sword", :email=>"Link@galvanize.com"}
  class_info[:'instructor']
  # => {:first_name=>"Link", :weapon=>"Master Sword", :email=>"Link@galvanize.com"}
```

The big advantage to a symbol over a string is that the symbol is _only created in memory once_.

One way we can visualize this difference is by looking at the `object_id` property of strings and symbols:

```ruby
puts "hello".object_id
puts "hello".object_id
puts "hello".object_id
puts :hello.object_id
puts :'hello'.object_id
puts :hello.object_id
```

The 'class_info' hash that we built uses the newer, JSON-style, syntax.
Let's look at what hashes looked like before Ruby 1.9. Hint, it is what we saw
returned on the command line above.

```ruby
  {
    :instructor => {
      :first_name => 'Link',
      :weapon => 'Master Sword',
      :email => 'Link@galvanize.com'
    }
  }
```

There is a lot more syntax in that definition, but it churns out the same thing.
We are mapping keys that are Symbols to values on the other side of a hash-rocket `=>`.

When we used the shorter syntax with the key separated from the value by just `:`, it
was using a shorthand to make symbol keys for us.

It turns out symbols are not the same as strings; let's check:

```ruby
  "Link" == :Link
  # => false
```

Learn more about symbols! Watch [Ruby's Symbols Explained](https://www.youtube.com/watch?v=mBXGBbEbXZY).

Why does this matter? Well any kind of an object can be a key.

```ruby
  confusing_hash = {
    'Link' => 'no one home',
    :Link => "is awesome"
  }

  key = 'Link'

  confusing_hash[key]
  # => "no one home"

  key = :Link

  confusing_hash[key]
  # => "is awesome"
```

That kind of confusion between strings and symbols when accessing a hash is so
common that Rails built a class `HashWithIndifferentAccess` that takes
away this problem.

While many things are possible, most are not advisable. Those weird hashes are pretty
confusing. Most developers would curse you to your face if you made something like
this and they had to maintain it.

One thing to note here, in our weird hash example, is that we are accessing nested data,
similar to how we access multi-dimensional arrays (arrays inside of arrays). We use nested square brackets:

```ruby
  class_info[:instructor][:first_name]
  # => "Link"
```

Access goes both ways. You can set hash values with square brackets too:

```ruby
  class_info[:instructor][:pet] = "cat"
  # => "cat"
```

When we try to set stuff that isn't yet there, things go wrong:

```ruby
  class_info[:ta][:first_name] = "Martha"
  # NoMethodError: undefined method `[]=' for nil:NilClass
	#    from (irb):21
	#    from /Users/baccigalupi/.rvm/rubies/ruby-2.1.2/bin/irb:11:in `<main>'
```

Hashes like all other Ruby constructs come action packed with many great methods.
Documentation will give you a sense of what is possible, but you should always experiment!

* Build a nested hash, 3 layers deep. When you try to read information that
you have not yet set, what happens? Is it similar to multi-dimensional arrays? How
is it different?

## Hash Exercises
In a ruby file construct an array of student data hashes.

Each student hash should contain:
* first name
* last name
* email
* class

for each student in the class.

Data:
```plain
  First Name    | Last Name     |   Email                 | Class
  ------------------------------------------------------------------------------
  Aaron           Gray              aaron@galvanize.com     Beginning snark
  Sylvester       Kelsey            sellie@gmail.com        Ruby Immersive
  Timothy         Rama              tim.rama@gmail.com      Ruby Immersive
  Nikita          Theodosius        nikita.theo@gmail.com   Ruby Immersive
  Roddy           Eldred            roddy.el@gmail.com      Ruby Immersive
  Martha          Berner            martha@gschool.it       Time travel for beginners
  Kofi            Thomas            k.thomas@hotmail.com    Ruby Immersive
```

You can copy and paste text values from the file, but are not allowed to copy and paste hashes or other syntax elements.

## More Exercises
* Experiment in IRB to figure out what you can do with `+`, `*`, `-`, `&`,
and `<<` on an array. PS: `<<` is really commonly used!
* What is the difference in range operators `..` and `...`?
* Experiment with the methods `.keys` and `.values`. What do they do? How would
this be useful?

## Resources
* Hash Docs: [http://www.ruby-doc.org/core-2.1.3/Hash.html](http://www.ruby-doc.org/core-2.1.3/Hash.html)
* Range Docs: [http://www.ruby-doc.org/core-2.1.3/Range.html](http://www.ruby-doc.org/core-2.1.3/Range.html)

## Extra Credit
* Go grok why hashes are called hashes. [Hint](http://c.learncodethehardway.org/book/ex37.html)

## Further Reading

http://www.randomhacks.net/2007/01/20/13-ways-of-looking-at-a-ruby-symbol/

# Assessment

Head over to the [students.galvanize.com](students.galvanize.com) tool and fill out the Unit 1 Section 7 assessment.
