const express = require("express");
const app = express();

app.use(express.static("./"));

app.get("/user", function (req, res) {
  const q = req.query;
  const data =
    {
      "jonsmith@example.com": {
        email: "jonsmith@example.com",
        first_name: "Jon",
        last_name: "Smith",
        description: "Lorem Ipsum Dolor",
        address: "123 Chocolate Ave",
        phone_numbers: ["2125551234", "2125551235", "2125551236"],
        relatives: ["Jane Smith", "Doe Smith"],
      },
      "janesmith@example.com": {
        email: "janesmith@example.com",
        first_name: "Jane",
        last_name: "Smith",
        description: "Lorem Ipsum Dolor",
        address: "123 Chocolate Ave",
        phone_numbers: ["2125551234", "2125551235", "2125551236"],
        relatives: ["Jon Smith", "Doe Smith"],
      },
      "doesmith@example.com": {
        email: "doesmith@example.com",
        first_name: "Dow",
        last_name: "Smith",
        description: "Lorem Ipsum Dolor",
        address: "123 Chocolate Ave",
        phone_numbers: ["2125551234", "2125551235", "2125551236"],
        relatives: ["Jane Smith", "Jon Smith"],
      },
    }[q.email] || [];

  res
    .writeHead(200, {
      contentType: "application/json",
    })
    .end(JSON.stringify(data));
});
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Application is running at http://localhost:" + port);
});
