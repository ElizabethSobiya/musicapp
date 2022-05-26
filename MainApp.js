import React from 'react'
import NavBar from './NavBar'
// import NavBar from './MusicApp/NavBar';
import Center from './Center';
import './MusicApp.css'
import Artists from './Artists'
import Tunes from './Songs';
import AddSongs from './AddSongs';
import AddArtists from './AddArtists';
// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function MainApp() {
  //  const navigate = useNavigate();
  return (
    <>
    <NavBar/>
    <Tunes/>
    {/* <Center/> */}
    <Artists/>
    <AddSongs/>
    <br/>
    <AddArtists/>
    {/* <Router>
         */}
             {/* <Route exact path="/" 
                        component={MainApp} />
  
                    <Route exact path="/AddSongs" 
                        component={AddSongs} />
               
            </Router> */}
  
    </>
  )
}

export default MainApp