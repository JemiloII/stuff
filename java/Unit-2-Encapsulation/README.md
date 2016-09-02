# Encapsulation

## Objectives

By the end of this unit, you should be able to:

- Describe encapsulation
- Implement encapsulation in Java using private fields and public getter / setter methods

## Visibility

In order to understand Encapsulation, you must know about the concept of _visibility_.  Java allows you to define which classes, methods and variables are visible to which pieces of code.  There are 3 key words that express the visibility of a method or field.

- public
- private
- protected

When a method / field is marked as `private`, only code _inside_ the class definition can see that method / field.

Marking a method / field as `public` allows for code that is inside and outside the class definition to access that method / field.

If a method / field is marked as `protected`, it can only be accessed by classes that extend / inherit to its class definition. This will be discussed in greater detail in the inheritance lesson.

You can set the visibility of methods / fields like so:

```java
private int count = 0;

public void increment(int num) {
  count++;
}
```

Furthermore, any methods / fields that do not have an access modifier, as such-

```java
int count = 0;
```

-will be treated as if they where `private` methods / fields.

To get familiar with visibility, navigate to the following directory and then run:

```
cd Unit-2-Encapsulation/problems/Encapsulation01
javac -d bin Encapsulation01.java && java -cp bin galvanize.Encapsulation01
```

You should see the following error:

```
error: allInFavor has private access in Proposal
```

### Exercise 1

Fix the `Proposal.java` file so that visibility is properly implemented.

### Exercise 2

Add a new field to the `Proposal` class name `allAgainst`. In the `Encapsulation01` class, assign a value to the `allAgainst` field in the instantiated object, and print out that value.

Add your changes to `Encapsulation01`.

## Private fields / public methods

The main idea behind encapsulation is that you want to make _private fields_, and provide _public methods_ that will internally modify those fields.

A private field looks something like this:

```java
class Person {
  private String name = "";
}
```

A getter method looks something like this:

```java
public String getName() {
  return name;
}
```

A setter method looks something like this:

```java
public void setName(String name) {
  this.name = name;
}
```

### Exercise 3

In the `Encapsulation02` example, the program accesses the `Proposal` object's fields directly.  Alter `Proposal` to have:

- a private name field
- a public getter method that returns the name
- a public setter method that sets the name to whatever is passed in

Then update the `Encapsulation02` class to:

- print out value of the name field using the getter
- update the value using the setter
- print out the value again

```
javac -d bin Encapsulation02.java && java -cp bin galvanize.Encapsulation02
```

### Exercise 4

You don't always need strict getter and setter methods (`getThing`, `setThing`).  Instead you could implement methods that more naturally fit into your domain.  In `Encapsulation03`, the program accesses the public `balance` property directly.  Make the following changes to `Account`:

- make `balance` private
- create a `balance()` method that returns the balance
- create a `deposit()` method that takes an int and adds money to the balance
- create a `withdraw()` method that takes an int removes that much from the balance
- refactor the `main` method and the `Transfer` class to work, now that you've made those changes

```
javac -d bin Encapsulation03.java && java -cp bin galvanize.Encapsulation03
```

## Seeing it in action

Why would you want to encapsulate data in your object?  All Object Oriented practices exist to help keep the cost of change low.  Consider the following example:

In the previous example you saw an account.  The account had a `balance` field.  That field kept track of the balance.  Let's say that instead of keeping a balance field, you instead want to _calculate_ the balance based on the transaction history.

So now you want to store an internal array of transactions.  Then you want the concept of `balance` to be the sum of the transactions, not to be a field itself.

If your program exposed the `balance` field to the world, when you make this change you might have to refactor hundreds or thousands of lines of code throughout your program.  But if you have a `balance()` method, you can change the _internal_ implementation and the outside world won't even know that it happened.

### Exercise 5

Refactor the `Encapsulation03` example such that:

- there's an internal private Array field called `transactions`
  - NOTE: for now just hardcode it to be 10 items long
- `deposit()` should insert a positive integer
  - NOTE: you can't push into an array, so keep track of the last index with a private `index` variable
- `withdraw()` should insert a negative integer
- `balance()` should return the sum of all of the elements in the array

Notice how even though you did some major surgery to that class, the code that _used_ that class didn't change at all.

```
javac -d bin Encapsulation03.java && java -cp bin galvanize.Encapsulation03
```

## Resources

- https://docs.oracle.com/javase/tutorial/java/concepts/index.html
- https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html
