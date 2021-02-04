import { useEffect } from 'react';
import './App.css';
import Login from './login';
import Player from './player';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './datalayer';
const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();



  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log('I have a token =', token);

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {


        dispatch({
          type: 'SET_USER',
          user: user,
        });

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });

        spotify.getPlaylist('1MVLJeBNYrWdaRPyOBvD6n').then((response) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response
          })
        })

      });
    }




  }, []);



  return (
    <div className="App">

      {
        token ? <Player spotify={spotify} /> : <Login />
      }



      {/* Spotify Logo*/}
      {/* Login with spotify button*/}


    </div>
  );
}

export default App;
