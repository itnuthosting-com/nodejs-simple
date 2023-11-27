var http = require('http');

var server = http.createServer(function (req, res) {
  // Set the Content-Type to HTML
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Add your HTML content here
  var htmlContent = `
    <html>
      <head>
        <title>My 1st App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to my first Node.js app!</h1>
        <p>
          This is a simple page with a title and a paragraph of text.
          I've added some basic CSS styling to make the page look a little bit better.
          I hope you like it!!
        </p>
      </body>
    </html>
  `;

  // Send the HTML content as the response
  res.end(htmlContent);
});

var PORT = 8080;
var HOST = 'your-domain-or-ip-address';

server.listen(PORT, HOST, function() {
  console.log('Server running at http://' + HOST + ':' + PORT + '/');
});