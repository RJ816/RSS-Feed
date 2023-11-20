const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.post("/save-url", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = require("querystring").parse(body).url;
    const filePath = path.join(__dirname, "database", "url-set.txt");

    fs.appendFile(filePath, data + "\n", (err) => {
      if (err) {
        res.status(500).send("Internal Server Error");
        console.error("Error saving URL to file:", err);
      } else {
        res.status(200).send("URL saved successfully");
      }
    });
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
