import React from 'react'
import Main from './React-Social-App/Main';
import Form from './InputForm/Form'
import MainApp from './MusicApp/MainApp';
import { BrowserRouter, Navigate, Route , Routes,} from "react-router-dom";
import {useQuery} from '@apollo/client'
import { MyQuery } from './MusicApp/Query';
import Query from './MusicApp/Query'
import {gql} from "graphql-tag"

const Artists = `
 query MyQuery {
  artists {
    artists_bio
    artists_dob
    artists_image
    artists_name
    artists_songs
    id
  }
}
`;

 function App() {
// React.useEffect(()=>{
//    const [artists, setArtists] = React.useState([]);
//   fetch('https://above-jaybird-69.hasura.app/v1/graphql', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-hasura-admin-secret": "hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK",
//     },
//     // authorization: "Bearer <hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK>",
//     body: JSON.stringify({query: Artists})
//   }).then(response => response.json())
// .then(data => setArtists(data))
// }, []);

  // const [result]= useQuery({
  //   query: MyQuery,
    
  // });
  // const {data, fetching, error} = result;
  // console.log(result)
  // if (fetching) return "Loading...";
  // if(error) return <prev>{error.message}</prev>

  return (
    <>
    <MainApp/>
    </>

  )
}





// import React from 'react'
// import HomePage from './MoviesWebsite/HomePage';
// import Navbar from './MoviesWebsite/Navbar';
// import Footer from './MoviesWebsite/Footer';


// function App() {
//   return (
//     <>
//     {/* <h1>hello world</h1> */}
//     <Navbar/>
//      <HomePage/> 
//      <Footer/> 
//     </>
//   )
// }




// import React, {Fragment, useState, useEffect } from "react";
// import Home from "./Router/Home";
// import { BrowserRouter, Navigate, Route , Routes,} from "react-router-dom";
// import About from "./Router/About";
// import Details from "./Router/Details";
// import Navbar from "./Router/Navbar";

// function App() {

//   useEffect(() => {
//     if (JSON.parse(localStorage.getItem("isLoggedIn")) == null){
//       localStorage.setItem("isLoggedIn", false)
//     }
//   })
 
   
//   const [isLoggedIn,setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")))
//   return (
   
    

//     <div className="components">
//       {/* <h1>APP COMPONENT</h1> */}
//       <BrowserRouter>
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn}/>
//        <Routes>
//        <Route path = "/" element ={ <Home/> } />
//        <Route path= "/about" element = { isLoggedIn == true ? <About/> : <Navigate to= '/'/>} />
//        <Route path= "/details" element = {isLoggedIn == true ? <Details/> : <Navigate to= '/'/>} />
//        <Route path="*" element ={ <h1>404 page not found</h1>}/>
//        </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }


// import React, { Component } from 'react'
// import Counter from "./Counter";

//  class App extends Component {
  

    
//     render() {
//     return (
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }






// // import React, { Component } from "react";
// // import AdminPanel from './AdminPanel/AdminPanel'
// import axios from 'axios';
// import GridDesign from './GridDesign/GridDesign.js';
// // import './GridDesign.css'
// import { Component } from 'react';



// export class App extends Component{
//   render(){
//     return(
//       <div>
//         <GridDesign/>
//       </div>
//     )
//   }
// }

// function App(){
//   return(
//     <div>
//        <GridDesign/>
//     </div>
//   )
// }


// export class App extends Component{

  
//   render (){
//   return (
//     <div>
//     
//       {/* <AdminPanel/> */}
//     </div>
//   )
// }
// }




export default App;
