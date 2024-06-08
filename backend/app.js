const express = require("express");
const app = express();
const cors = require("cors");
const indexRouter = require("./routes/index");

// Подключение к MongoDB
app.use(express.json());
app.use(cors());
app.use(indexRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
