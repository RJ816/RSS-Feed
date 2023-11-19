var http = require("http");
var fs = require("fs");
var path = require("path");
var qs = require("querystring");

http.createServer(function (req, res) {
    if (req.method === "POST" && req.url === "/save-url") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const data = qs.parse(body).url;
            const filePath = path.join(__dirname, "database", "url-set.txt");

            // Append the URL as a string to the file
            fs.appendFile(filePath, data + "\n", (err) => {
              if (err) {
                  res.writeHead(500, { "Content-Type": "text/plain" });
                  res.end("Internal Server Error");
                  console.error("Error saving URL to file:", err);
              } else {
                  res.writeHead(200, { "Content-Type": "text/plain" });
                  res.end("URL saved successfully");
              }
          });
      });
  } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
  }
}).listen(8080);