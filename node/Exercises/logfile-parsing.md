# Log File Parser

## Setting the stage (What and Why)

Web applications of all sizes tend to generate lots of _log data_. Log data contains information that allows developers and operations engineers to get insight into how a system is operating in the production environment. As you progress in software development you will learn the age old adage ["it works on my machine!"](http://www.ademiller.com/blogs/tech/2008/06/it-works-on-my-machine-award/) This is a reflection of the fact that it often works in your development environment, but then fails in the production environment.

This exercise is design to help familiarize you with what log data is and can look like. You will write code using Node.js and the `fs` module to parse the log data and turn it into usable data structures.

## Educational Objectives

- Run a JavaScript file with `node`.
- Use `fs` to parse files and understand more about file I/O.
- Use the File System Module (`fs`) to interact with the filesystem.

### Key terms:

- file I/O
- `fs`

### `fs`: A Walkthrough

Recall that for a file that lives at `/path/to/file.js`, it can be run using the Node.js command line tool like so:

```shell
  node /path/to/file.js
```

#### What is I/O?

I/O is simply, _input/output_, and can be used in many different contexts. In our particular case, we are interested with file I/O.

Begin by reading the documentation for [`fs.readFile`](https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback)

Create a file called `example.txt` and add "Hello! I am a text file!" to it.

In the same directory, create a file and add the following code:

```javascript
// include the fs module
var fs = require("fs");

fs.readFile("./example.txt", function(err, data) {
  if (err) throw err;

  // what gets logged in each case?
  console.log(data);

  console.log(data.toString());
});
```

Run your file, and answer these questions:

1. What is the output from the example in the documentation?
2. What kind of output do you get from your file when we print `data`?
3. What do we get when we call .toString() on data. What is happening?
4. When is `err` triggered?


Review the first line of the script above, `var fs = require("fs");`. This code brings in a library, `fs`, which allows developers to write JavaScript code that interacts with the filesystem. `fs` is one of the major features that distinguishes JavaScript (unable to access the filesystem) from Node.js (able to load `fs`). It is a fundamental, standard and important package in the Node.js ecosystem.

To test your understanding, try write a script which takes a [command line argument](http://stackoverflow.com/questions/4351521/how-to-pass-command-line-arguments-to-node-js) for a filename in the same directory, then creates a copy of the file with the original name and `.copy` added as an extension. For the provided filename, perhaps `example.txt`, after your script is run with `example.txt` as the command line argument, when you use `ls` you should see `example.txt` and `example.txt.copy`, with both files having the same data in them (you can test this with `cat [file]`).

A good starting point for this coding task is the documentation for [`fs.writeFile`](https://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback) and creating a working example.

### Exercise

Suppose you are a Junior Developer at a firm with good deployment practices and an interest in [DevOps](https://en.wikipedia.org/wiki/DevOps). Being such an organization, you are interested in implementing a system which automatically notifies your team of any spikes in certain application log levels.

In order to better understand the larger problem (_think:_ Polyá's method), your manager tells you to complete the following tasks:

* Write a Node.js script should parse the [provided logfile](logfile-parsing-data/log.log) and `console.log` the answers to the following questions (including the question text):

  * What are all the dates the log covers?
  * For each date, how many log messages were added?
  * How many log messages were there of each level for each day (e.g. `DEBUG`, `INFO`, `WARN`)?

Create a script that outputs the following:

```shell
> node logParser.js
* What are all the dates the log covers?
2014-05-10
2014-05-11
2014-05-12
2014-05-13
2014-05-14
2014-05-15
2014-05-16

* For each date, how many log messages were added?
2014-05-10 205
2014-05-11 264
2014-05-12 326
2014-05-13 271
2014-05-14 365
2014-05-15 324
2014-05-16 348

* How many log messages were there of each level for each day (e.g. `DEBUG`, `INFO`, `WARN`)?
2014-05-10 DEBUG  74
2014-05-10  INFO  75
2014-05-10  WARN  56
...
```

[Here's that logfile again](logfile-parsing-data/log.log)  

##### Where to start?

Begin by applying Polyà's method to the first problem, "What are all the dates the log covers?"

  1. Make sure you can explain what the problem is in your own words. Pretend you are explaining it to somebody who has very little understanding of the task at hand.
  1. One experiment might be to write code that displays a list of all of the dates, then advance to producing the unique list. How will this work with Node.js?
  1. [Solve the problem!](http://4.bp.blogspot.com/-4OJAFEipqwI/VH-mXTylY3I/AAAAAAAAISM/E4Ur0uesVmM/s1600/You%2Bgot%2Bthis.jpg)
  1. The most important step; reflect on your solution. Pretend you are not yourself and read through your code. Ask yourself, would you want to work with this developer?

#### Challenge Tasks

For an added challenge, parse the log file, breaking it into the various messages it contains and provide counts for the words in those messages. For example (using the sample log file data above), a message would be "transition sticky bandwidth" which would break into a count like `{transition: 1, sticky: 1, bandwidth: 1}` and the goal is to provide a sorted list of all of these words from the log messages, including a frequency count.

For an added, added challenge, write the code for handling the lines of the text file two different ways.

For an added, added, added challenge, use Jasmine (recall, `jasmine init` will set up the scaffold) to write tests for your code.

##### Additional information

You get log files that are in this format:

    W, [2014-05-10T13:49:19.049260 #83516]  WARN -- : deliver B2C systems
    W, [2014-05-10T13:49:19.049408 #83516]  WARN -- : transition sticky bandwidth

That is...

    [log level char], [<date> #<processid>]  <log level> -- : <message>

#### Reflection Questions

1. How did you choose to structure your code? Did you write one file, three, ten files? Did you structure your code as just functions? Objects? Justify your decisions and reflect on if they were good ones.

1. What part of this was the most challenging?

1. Why are log files useful?

1. What is Polyà's method?

## Reflect: Self-asses

Go to the "Objectives" section of this README. Go through each one and ask yourself:

- Have I completed this objective?
- What concrete evidence do I have that I've completed the objective?

Go to the "Key Terms" section of this README. For each word, ask yourself:

- What is my explanation for this term?

If you haven't completed an objective, or you can't define a term, take a few minutes to try to fill in any gaps.

## Reflect: Ask new questions

What new questions do you have now that you've gone through this exercise?

List at least 4 here:

1.
1.
1.
1.
