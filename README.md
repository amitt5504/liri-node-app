# liri-node-app

The goal of the Liri Node App is to allow users to query songs on Spotify, search the OMDB database for movie information as well as look up upcoming concerts for their favorite performers.

Entering "spotify-this-song" "song title" to query Spotify for the available song.

Entering "movie-this" "movie name" to query OMDB for movie information.

Entering "concert-this" provides upcoming concert information for the specific artist queried.

Entering "do-what-it-says" runs spotify-this-song for I Want It That Way by Backstreet Boys.

#spotify-this-song
When running the command "spotify-this-song" + "song title", the top 20 results are displayed to the user including the artist name, preview url of the song, song title and album. 

![log of spotify results](https://drive.google.com/file/d/1R255NE-dZn9fNwgRHuLzbbwIGEj-lUn1/view?usp=sharing)

If no song title is entered, the command will search for the song "The Sign" by default.

![log of spotify results](https://drive.google.com/file/d/12wB_qnq_6M9uE9q2APMw91ck2MENpALO/view?usp=sharing)

#concert-this
This command returns the name of the venue, the city the venue is located in and the date of the upcoming concert.

![log of concert results](https://drive.google.com/file/d/1LCltO-mVF6M7QMK0Vx-y0BuPa9tBFnDj/view?usp=sharing)

#movie-this
This command returns the title of the movie, the release year, iMDB/Rotten Tomatoes rating, plot, actors, movie languages and production company. If the command is run with no movie entered, the results will show for the movie "Mr. Nobody".

![log of movie results](https://drive.google.com/file/d/131Scxk2mRjMhLxBmdonoI9kCY9s4l2qk/view)

All commands and results are stored in a txt file for the user.
