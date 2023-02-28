const express = require("express");

const app = express();

const PORT = process.env.PORT || 8800;

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Listing to server on port ${PORT}`);
});
