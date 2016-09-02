var fs = require('fs');

// A file is required for this to work.
var filename = process.argv[2];
if (!filename)
  throw new Error("kewl.js is cool, but not that cool! You must provide a filename to interpet!");

// centralize inclusion of "kewl: " at beginning of output, code like this would
// be placed inside of another Node.js module eventually
function print(string) {
  console.log("kewl: " + string);
}

// provide an expansion path for other commands, as functionality likes this grows
// it would be pulled into separate Node.js modules, then included here (via require)
var KnownCommands = {
  print: print
}

fs.readFile(filename, 'utf-8', function(err, data) {
  // in case of an invalid filepath or other error condition
  if (err) throw err;

  var lines = data.split('\n');

  lines.forEach(function(line) {
    var command = "",
        output = "",
        midString = false;

    for(var i = 0; i < line.length; i++) {
      // first character or end character of string
      if (line.charAt(i) == "'") {
        // invert status of if in a word or not
        midString = !midString;
      // otherwise if it is a space and we are not mid-word, skip it
      } else if (line.charAt(i) == ' ' && !midString) {
        continue;
      // if not in a string then must be a command since not a space
      } else if (!midString) {
        command += line.charAt(i);
      // otherwise content is part of an output string
      } else {
        output += line.charAt(i);
      }
    }

    if (command) KnownCommands[command](output);
  });
});