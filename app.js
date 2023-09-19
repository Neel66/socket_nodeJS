const express = require("express");
const { PORT } = require("./configs/env.config");
const app = express();
const cors = require("cors");
const { NOT_FOUND } = require("./constants/http-status-code.constant");
const { COMMON_MESSAGES } = require("./constants/messages.constant");
const apiHelper = require("./helpers/api.helper");
app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index.route"));

// catch 404 route and pass it to error handler
app.use((req, res, next) => {
  const error = new Error(COMMON_MESSAGES.ROUTE_NOT_EXISTS);
  error.status = NOT_FOUND;
  next(error);
});

// error handlers
app.use((err, req, res, next) => {
  console.log("err :>> ", err);
  apiHelper.failure(res, err.message, [], NOT_FOUND);
});
app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
