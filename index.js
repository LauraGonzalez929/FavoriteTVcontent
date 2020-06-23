var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var shows = [
  {
    routeName: "ava",
    id: 5,
    name: "Avatar The Last Airbender",
    genre: "cartoon",
    year: 2005,
  },
  {
    routeName: "maid",
    id: 4,
    name: "The Handmaid's Tale",
    genre: "drama",
    year: 2017,
  },
  {
    routeName: "narcos",
    id: 3,
    name: "Narcos",
    genre: "crime drama",
    year: 2015,
  },

  {
    routeName: "rick",
    id: 1,
    name: "Rick and Morty",
    genre: "comedy",
    year: 2013,
  },

  {
    routeName: "death",
    id: 2,
    name: "death note",
    genre: "anime",
    year: 2006,
  },
];

app.get("/", function (req, res) {
  res.send("Welcome to our tv content!");
});

app.get("/api/characters", function (req, res) {
  return res.json(shows);
});

app.get("/api/shows/:shows", function (req, res) {
  var chosen = req.params.shows;

  console.log(chosen);

  for (var i = 0; i < shows.length; i++) {
    if (chosen === shows[i].routeName) {
      return res.json(shows[i]);
    }
  }

  return res.send("No shows found");
});

app.post("/api/characters", function (req, res) {
  var newShows = req.body;

  console.log(newShows);

  characters.push(newShows);

  res.json(newShows);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
