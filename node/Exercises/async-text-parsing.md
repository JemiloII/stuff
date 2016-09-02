# Generic Text Parsing

This exercise should follow [Log File Parser](logfile-parsing.md).

Please read through this entire document first, then return to the beginning to complete the exercise.

## Setting the stage (What and Why)

This exercise is meant to help you understand how the interpreter works, and text parsing as a deep topic.

## Educational Objectives

- Run a JavaScript file with `node`.
- Use `fs` to parse files and understand more about file I/O.
- Use the File System Module (`fs`) to interact with the filesystem.
- Explain fundamental concepts behind how a computer language interpreter parses text using terms like token, delimiter, etc.

### Key terms:

- `fs`
- parsing
- tokenization
- delimiter

## Educational Activities

The `fs` module was covered extensively in the [Log File Parser](logfile-parsing.md). This lesson will dig deeper into the ideas behind text parsing.

As previously stated, [computers are stupid](http://www.toothpastefordinner.com/081102/computers-are-stupid.gif). That is, when a file contains text, aside from the file extension, the machine has no idea of what that text means. Even given the file extension, the machine will still code need to _interpret_ the code.

That is, there is some code that reads code files, and makes it _go_. Another way to think of this is that words on a page are meaningless until you have read and comprehended them; a computer program is no different.

The _interpreter_ is baked into the runtime in the case of JavaScript and Node.js.

But more generally, _how does an interpreter work_? This is a [deep topic](http://stackoverflow.com/questions/2377273/how-does-an-interpreter-compiler-work), so to simplify, assume a simple interpreter that can handle one type of statement; `print`. Statements in this pretend language, `kewl.js`, look like this:

  ```
  // in [sample.kewl](/unit-1/exercises/async-text-file-parsing-data/sample.kewl)
  print 'Good times'
  print 'Programming is awesome!'
  ```

  and has corresponding usage and output:

  ```
  $:> node kewl.js sample.kewl
  kewl: Good times
  kewl: Programming is awesome!
  ```

Do not continue past this question until you have an answer you are convinced of; can this be achieved with Node.js?

Good news, since `fs` can read files from the filesystem, Node.js can be used to create `kewl.js`!

The business; first, the interpreter must begin by _parsing_ the file, that is, reading the file's contents in according to some rule. `kewl.js` is a simple language, so it can be read in as entire line to then be broken down further, each line is delimited by a newline character (`\n`), but the last line is not require to follow this convention.

Next, each line must be [tokenized](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization). That is, a string is being broken down into subcomponents. In `kewl.js` there are two types of tokens:

  1. `print`
  1. A String representation of text surrounded by single quotes.

The _delimiter_, when parsing a string into tokens, is the character that breaks the larger string into tokens (possibly to be broken down into subtokens via a secondary delimiter, etc).

Here is one example of a [solution](async-text-file-parsing-data/kewl_solution.js) for creating `kewl.js`.

The following is an exercise for the reader: re-write `kewl.js` to work so that `print` takes parenthesis and the string does not require the single quote. Usage would look like:

  ```
  // in sample.kewl
  print(Good times)
  print(Programming is awesome!)
  ```

If you are looking for a challenge, allow the original version of `kewl.js` to accept strings with escaped characters in them. [`hard_sample.kewl`](async-text-file-parsing-data/hard_sample.kewl) is provided for sample data.

Finally, complete [text parsing for the marketing master](async-text-file-parsing-data/text_parsing_for_the_marketing_master.md). For each example:

  * determine what the delimiters are (_note:_ some examples may only have one)
  * what do the tokens look like?

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
