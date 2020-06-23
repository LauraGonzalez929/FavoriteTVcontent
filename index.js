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
      year:2005,
      
    },
    {
        routeName: "maid",
        name: "The Handmaid's Tale" ,
        genre: "drama",
        year: 2017,
    },
    {
        routeName: "narcos",
        name: "Narcos",
        genre: "crime drama",
        year: 2015,
    }
 
    {
        routeName: "rick",
        name: "Rick and Morty",
        genre: "comedy",
        year: 2013,
    }
 
    {
        routeName: "death",
        name: "death note",
        genre: "anime",
        year: 2006
    }
 ];
  
