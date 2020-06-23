var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var characters = [
  {
    routeName: "ava",
    name: "Avatar The Last Airbender",
    genre: "cartoon",
    year: 2005,
  },
  {
    routeName: "maid",
    name: "The Handmaid's Tale",
    genre: "drama",
    year: 2017,
  },
  {
    routeName: "narcos",
    name: "Narcos",
    genre: "crime drama",
    year: 2015,
  },

  {
    routeName: "rick",
    name: "Rick and Morty",
    genre: "comedy",
    year: 2013,
  },

  {
    routeName: "death",
    name: "death note",
    genre: "anime",
    year: 2006,
  },
];

app.get("/", function (req, res) {
  res.send("Welcome to our tv content!");
});

app.get("/api/characters", function (req, res) {
  return res.json(characters);
});

app.get("/api/characters/:character", function (req, res) {
  var chosen = req.params.title;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.send("No content found");
});

app.post("/api/characters", function (req, res) {
  var newtitle = req.body;

  console.log(newtitle);

  characters.push(newtitle);

  res.json(newtitle);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
