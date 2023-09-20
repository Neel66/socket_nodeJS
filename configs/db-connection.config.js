const mongoose = require("mongoose");
const { DB_URI } = require("./env.config");

// mongoose.set('useFindAndModify', false);
mongoose.set("strictQuery", false);

mongoose.connect(DB_URI, console.log("Connected to Database!", DB_URI));
