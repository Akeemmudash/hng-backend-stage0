const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  const response = {
    email: "akeemmudash@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Akeemmudash/hng-backend-stage0.git",
  };
  res.status(200).json(response);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
