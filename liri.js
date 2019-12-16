require("dotenv").config();
var axios = require("axios");

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


// function for spotify search
// spotify.search(
//     {
//         type: "track",
//         query: "Mask Off"
//     },
//     function (err, data) {
//         if (err) {
//             console.log("Error occurred: " + err);
//             return;
//         }
    
//     console.log(data.tracks.items[0]);
// });

//bands
// var artist = "Lupe Fiasco";
// var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// axios
//   .get(queryUrl)
//   .then(function(response) {
//     // If the axios was successful...
//     // Then log the body from the site!
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an object that comes back with details pertaining to the error that occurred.
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });


//omdb
var movie = "Lion King";
var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

axios
  .get(queryUrl)
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });



//switch statement taking in process.argv[2]
//process.argv[3] is argument passing through
// switch(case):
// `concert-this`

//    * `spotify-this-song`

//    * `movie-this`

//    * `do-what-it-says`





// omdb (copy from past example)


// write comment to log file