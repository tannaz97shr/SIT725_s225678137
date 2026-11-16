const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (
    !Number.isFinite(a) ||
    !Number.isFinite(b) ||
    !req.query.a ||
    !req.query.b
  ) {
    return res.status(400).json({
      error: "Please provide two valid numbers.",
    });
  }

  const sum = a + b;

  res.json({
    a: a,
    b: b,
    result: sum,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
