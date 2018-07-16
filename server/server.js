const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const moment = require("moment");
const morgan = require("morgan");
const { debug, info, warn, error, data } = require("./utils");

const app = express();
const PORT = process.env.PORT || 9000;
const publicPath = path.join(__dirname, "..", "public");

// Express Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(publicPath));

if (process.env.NODE_ENV == "dev") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("tiny"));
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, e => {
  if (!e) {
    info("\n-------------------------------");
    info(`| Server running on PORT ${PORT} |`);
    info("-------------------------------");
  } else {
    error(`Error: ${e}`);
  }
});
