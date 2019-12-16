require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var value = process.argv[3];

liriAction(action, value);

function liriAction(action, value) {
    fs.appendFile("log.txt", action + "\n", function (err) {
        if (err) {
            console.log(err);
        }
    })
    switch (action) {
        case "spotify-this-song":
            spotifyThis(value);
            break;

        case "movie-this":
            movieThis(value);
            break;

        case "concert-this":
            concertThis(value);
            break;

        case "do-what-it-says":
            simonSays();
            break;
    }
}

function spotifyThis(value) {
    if(value == NULL)
    {
        value = "The Sign"
    }
    fs.appendFile("log.txt", "Searching for song: " + value + "\n", function (err) {})
    console.log("Searching for song....");
    console.log("-----");
    spotify.search({
            type: "track",
            query: value
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var results = data.tracks.items;
            for(var i = 0; i < results.length; i++)
            {
                console.log("Artist: " + results[i].artists[0].name);
                fs.appendFile("log.txt", "Artist: " + results[i].artists[0].name + "\n", function (err) {});
                console.log("Preview URL: " + results[i].preview_url);
                fs.appendFile("log.txt", "Preview URL: " + results[i].preview_url + "\n", function (err) {});
                console.log("Song Name: " + results[i].name);
                fs.appendFile("log.txt", "Song Name: " + results[i].name + "\n", function (err) {});
                console.log("Album Name: " + results[i].album.name);
                fs.appendFile("log.txt", "Album Name: " + results[i].album.name + "\n", function (err) {});
                console.log("----")
                fs.appendFile("log.txt", "-----" + "\n", function (err) {});
            }
        });
}

function concertThis(value) {
    fs.appendFile("log.txt", "Searching for concerts featuring: " + value + "\n", function (err) {})
    console.log("Searching for concerts featuring: " + value);
    console.log("-----");
    var artist = value;
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios
        .get(queryUrl)
        .then(function (response) {

            for (var i = 0; i < response.data.length; i++) {
                console.log("Venue Name: " + response.data[i].venue.name);
                fs.appendFile("log.txt", "Venue Name: " + response.data[i].venue.name + "\n", function (err) {});
                console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region);
                fs.appendFile("log.txt", "Venue Location: " + response.data[i].venue.city + "\n", function (err) {});
                console.log("Date: " + moment(response.data[i].datetime).format('MM/DD/YYYY'));
                fs.appendFile("log.txt", "Date: " + moment(response.data[i].datetime).format('MM/DD/YYYY') + "\n", function (err) {});
                console.log("-----");
                fs.appendFile("log.txt", "-----" + "\n", function (err) {});
            }
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function movieThis(value) {
    if(value == "")
    {
        value = "Mr. Nobody"
    }
    fs.appendFile("log.txt", "Searching for movie: " + value + "\n", function (err) {});
    console.log("Searching for " + value);
    console.log("-----");
    var movie = value;
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios
        .get(queryUrl)
        .then(function (response) {
            console.log("Title: " + response.data.Title);
            fs.appendFile("log.txt", "Title: " + response.data.Title + "\n", function (err) {});
            console.log("Release Year: " + response.data.Year);
            fs.appendFile("log.txt", "Release Year: " + response.data.Year + "\n", function (err) {});
            console.log("iMDB Rating: " + response.data.Ratings[0].Value);
            fs.appendFile("log.txt", "iMDB Rating: " + response.data.Ratings[0].Value + "\n", function (err) {});
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            fs.appendFile("log.txt", "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n", function (err) {});
            console.log("Production Country: " + response.data.Country);
            fs.appendFile("log.txt", "Production Country: " + response.data.Country + "\n", function (err) {});
            console.log("Movie Languages: " + response.data.Language);
            fs.appendFile("log.txt", "Movie Languages: " + response.data.Language + "\n", function (err) {});
            console.log("Plot: " + response.data.Plot);
            fs.appendFile("log.txt", "Plot: " + response.data.Plot + "\n", function (err) {});
            console.log("Actors: " + response.data.Actors);
            fs.appendFile("log.txt", "Actors: " + response.data.Actors + "\n", function (err) {});
            fs.appendFile("log.txt", "-----" + "\n", function (err) {});
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function simonSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);

        var dataArr = data.split(",");
        spotifyThis(dataArr[1]);
    });
}