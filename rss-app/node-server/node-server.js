var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

http.createServer(function (req, res) {
    if (req.method === "POST" && req.url === "/save-url") {
        let body = '';

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const data = JSON.parse(body);

            // Assuming you want to save the URL to a file named "database.txt"
            fs.appendFile("database.txt", data.url + "\n", (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    console.error('Error saving URL to file:', err);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('URL saved successfully');
                }
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(8080);