var fs = require('fs');

var filename = process.argv[2];

// Guido Mills
//   Marc Harber
//     Elton Corkery
//   Dixie Schulist
//     Jerel Cruickshank
//       Myrna Sauer

fs.readFile(fs, function(err, data) {
  if (err) throw err;

  data.toString().split('\n')
});