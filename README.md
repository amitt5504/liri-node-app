# liri-node-app

The goal of the Liri Node App is to allow users to query songs on Spotify, search the OMDB database for movie information as well as look up upcoming concerts for their favorite performers.

Entering "spotify-this-song" "song title" to query Spotify for the available song

Entering "movie-this" "movie name" to query OMDB for movie information

Entering "concert-this" provides upcoming concert information for the specific artist queried

#spotify-this-song
When running the command "spotify-this-song" + "song title", the top 20 results are displayed to the user including the artist name, preview url of the song, song title and album. If no song title is entered, the command will search for the song "The Sign" by default

#concert-this
This command returns the name of the venue, the city the venue is located in and the date of the upcoming concert

#movie-this
This command returns the title of the movie, the release year, iMDB/Rotten Tomatoes rating, plot, actors, movie languages and production company. If the command is run with no movie entered, the results will show for the movie "Mr. Nobody"

All commands and results are stored in a txt file for the user.
