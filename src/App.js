import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Credentials } from "./Credentials";
import axios from "axios";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import SoFar from "./components/SoFar";

function App() {
 

  const [ token, setToken ] = useState('');
  const [ partyPhotos , setPartyPhotos] = useState([]);
  // const [ playlist, setPlaylist ] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
  // const spotify = Credentials()


  const getPartyPhotos = () => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=900&camera=pancam&api_key=InSUsy3xJAPrf98mrdA34DdNNGVYpkGRbGOYs0jO")
    .then((res) => res.json())
    .then((data)=> setPartyPhotos(data.photos) )
  }

  //sol 101 is good for opportunity!  & 900 but all black and white
  //https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=900&camera=navcam&api_key=InSUsy3xJAPrf98mrdA34DdNNGVYpkGRbGOYs0jO
  //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=InSUsy3xJAPrf98mrdA34DdNNGVYpkGRbGOYs0jO

  useEffect(getPartyPhotos, []);
  
  // useEffect(() => {
  //   axios('https://accounts.spotify.com/api/token', {
  //     headers: {
  //       'Content-Type' : 'application/x-www-form-urlencoded',
  //       'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
  //     },
  //     data: 'grant_type=client_credentials',
  //     method: 'POST'
  //   })
  //   .then(tokenResponse => {      
  //     setToken(tokenResponse.data.access_token)});

  //     axios('https://api.spotify.com/v1/playlists/2sjNT7udCWklujkW3ipMj0', {
  //       method: 'GET',
  //       headers: { 'Authorization' : 'Bearer ' + token }
  //     })
  //     .then(res => setPlaylist(res))
  

  // } , [])

	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<Switch>
						<Route path="/sofar" render={()=> <SoFar partyPhotos={partyPhotos}/>} />
						<Route exact path="/" component={LandingPage} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
