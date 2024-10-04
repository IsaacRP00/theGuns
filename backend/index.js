// tibu lines
const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// cors
const cors = require("cors"); 

const corsOptions = {
    origin: "http://localhost:8100"
}

app.use(cors(corsOptions));

// db
const db = require("./models");
db.sequelize.sync().then(() => {
    console.log("database already synced")
});

app.get("/", (req, res) => {
  res.json({ message : "welcome to guns aplication"});
});

require("./routes/myGuns.routes.js")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

