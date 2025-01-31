const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;
//* set my required details
const EMAIL = "devprinceng@gmail.com";
const GITHUB_URL =
  "https://github.com/devprinceng/HNG12-Backend-Stage0-task.git";

//* create a server, and our get endpoint as well
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // to enable CORS
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        email: EMAIL,
        current_datetime: new Date().toISOString(),
        github_url: GITHUB_URL,
      })
    );
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "API Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
