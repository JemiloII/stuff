# Test Parsing for the Marketing Master

_A tale from the field:_ Before my life as a developer, I used to be a data analyst. A poor, misguided data analyst. At the time, I was approached by a colleague of mine, we will call her the _Marketing Master_. The Marketing Master, as they always do, promised it was a simple ask; can you produce a heatmap of the United States colored by how many users live in each state? Being naive, I eagerly agreed, after all, she said it was easy; _how hard could it be?_

As I went along, without a knowledge of any functional programming, just knowing SQL, and working with a _real world_ data set, I quickly discovered I was in over my head. So many things were going wrong; the data set was a mess!

Some of these users were not even users at all, they were employees or bots or people who signed in once, but alas, there was no flag or anything to indicate any of these things. In the end there was a 400+ line SQL script that aggregated users into the states they belonged to, following a monster set of switch statements to match on the user's state (aside from figuring out if they even lived in the US! Damn you user who filled out the entire form 1 field off!).

Where is this going? _Counts_ are a simple, but important measure often used in business statistics, or used as sub components of a greater piece of work, like the heat map infographic for the Marketing Master. The following exercises work with `fs.readFile` to tokenize text and use counts in various ways.

Remember to use [Polyà's method](https://math.berkeley.edu/~gmelvin/polya.pdf) as you progress through these problems:

  1. Spend some time getting familiar with the provided [`mit_license.txt`](mit_license.txt) file which contains a copy of the MIT License for the famous, ficticious software developer, _Copy McCattington_. Write a Node.js commandline script, name the file `mit.js`, that takes in an argument for the file's name (in this case `mit_license.txt`) and then `console.log`s an object with a word count for each word in the license. For the purpose of this word count `the`, `The`, `THE`, etc. are all the same word.
  
    For example, if you look at the `smaller_sample.txt` file included in this repository, the logged object would look like:

    ```
    {
      this: 3,
      counts: 3,
      a: 1,
      lot: 1
    }
    ```

  1. Read a few random lines in the [`dev_talk.txt`](dev_talk.txt) for a nice laugh. Write a Node.js command line script, name the file `talk.js`, that takes in an argument for the file's name (in this case [`dev_talk.txt`](dev_talk.txt)) and then `console.log`s an object with the average number of non-newline (`\n`) characters in each line.

    For example, if you look at the `smaller_sample.txt` file included in this repository, the response would be:

    ```
    Average number of characters per line: 13
    ```

  1. Review the [`org_chart.txt`](org_chart.txt) file included in this repository which contains the organization chart for a rather flat company. That is, there is only one level deep of management, every person is either a manager or the employee of the last listed manager. Managers have no indentation for their entry in the text file and employees have 2 spaces. Again you are writing a Node.js command line script, name the file `org.js`, and have it take a command line argument for the file's name (in this case [`org_chart.txt`](org_chart.txt)) and then `console.log` an object where each property is the name of a manager and each value is an array of their employee's names.

    For example, if you look at the [`mini_org_chart.txt`](mini_org_chart.txt) file included in this repository, the repsonse would be:

    ```
    { 'Boris Langworth': [
        'Daphney O\'Conner',
        'Chad Breitenberg'
      ],
      'Cody Schaden': [
        'Marcella Bashirian',
        'Kenneth Romaguera',
        'Lew Daugherty'
      ]
    }
    ```

  1. _Stretch_ Continuing with the theme of the last exercise, check out the [`org_chart_nested.txt`](org_chart_nested.txt) file. Write a Node.js command line script, named `nested_org.js`, and have it take a command line argument for the file's name (in this case [`org_chart_nested.txt`](org_chart_nested.txt)) and then `console.log` an object where each property is the name of a manager and each value is an object containing the names of people they manage and an object for that person for any person they manage (recursively).

    For simplicity you may assume that any person may be elligible to have an employee that they manage. This is illustrated in the output below, Dixie and Myrna do not have any reports but each have an (empty) array value.

    For example, if you look at the [`mini_org_chart_nested.txt`](mini_org_chart_nested.txt) file included in this repository, the response would be:

    ```
    { 'Guido Mills': [
        'Marc Harber': [
          'Elton Corkery': [
            'Dixie Schulist': [],
            'Jerel Cruickshank': [
              'Myrna Sauer': []
            ]
          ]
        ]
      ]
    }
    ```

#### Reflection Questions

1. Which aspect of this coding exercise proved to be most powerful?

1. Where did you use higher order functions? If you did not, are there places where your code can be refactored to use higher order functions?

1. Can you think of an example of a count in a business setting and how it would be useful? How would a business be interested in looking at that count?

1. What is Polyà's method?
