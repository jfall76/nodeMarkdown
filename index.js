var fs = require('fs');
var parser = require('node-markdown');
var output;

fs.readFile('data.md', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  output = parser.Markdown(data);
  fs.writeFileSync("output.html", output);
});
