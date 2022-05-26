import React from 'react'
import { useState } from 'react';
import Axios from 'axios'; 
import {Link} from 'react-router-dom'
import axios from 'axios';
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom";



export default function AddSongs() {
  

  // constructor(props);{
  //   super(props);
  //   this.state = {
  //     songs_name: '',
  //     songs_artist: '',
  //     songs_release:'',
  //   //   formErrors: {songs_name: '', songs_artist: '', songs_release},
  //   // songs_nameValid: false,
  //   // songs_artistValid: false,
  //   // songs_releaseValid:false,
  //   // formValid: false
  //   }
  // };


    const url = "https://above-jaybird-69.hasura.app/v1/graphql";
    const [data, setData] = useState({  
            songs_artist: '',
             songs_name: '',
             songs_release: ''
        
    }) 

    function submit(e){
      // ({songs_artist,songs_name, songs_release})
      
          
      let params = `{songs_artist: $songs_artist,
        songs_name: $songs_name,
        songs_release: $songs_release}`
  ;


      const query =  `
        mutation MyMutation($songs_name:String!, $songs_artist:String!, $songs_release:String!){
        insert_songs_details(objects:{songs_name:$songs_name, songs_release: $songs_release, songs_artist:$songs_artist}){
            returning{
               songs_name
               songs_release
               songs_artist
             }
           }
         }`;
        e.preventDefault();
        fetch('https://above-jaybird-69.hasura.app/v1/graphql', {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "X-hasura-admin-secret": "hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK"},
           
        //  body:JSON.stringify({
        //              songs_name:data.songs_name,
        //              songs_release: data.songs_release,
        //              songs_artist:data.songs_artist
        //         }),
        //         data:{
        //           query:query,
        //                     variables:params,
        //                   },
         
        //  authorization: "Bearer <hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK>",
        
          data: JSON.stringify({query: query,
             variables:{
               type: 'POST'
             }
          })
       })
       .then(res => res.json())
     .then(data =>  console.log(data))
     }
    // console.log(body)
    function handle(e){
      const newData = {...data}
      newData [e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
  //     const name = e.target.name;
  // const value = e.target.value;
  // this.setState({[name]: value}, 
  //   () => { this.validateField(name, value) });
    }

  return (
    <>
     {/* <NavBar/>
     <button className="btn btn-success" onClick={home}>
                Back to Home
            </button> */}
    <h1>Create New Songs</h1>
    <div className='formDiv'>
    <form action="" className='formData' onSubmit= {(e)=> submit(e)}>
        <label htmlFor="">Song Name: </label>
        <input type="text" id='songs_name' placeholder='song_name'
        value={data.songs_name}
         onChange={(e) => handle(e)}  />
        <label htmlFor=""> Released Date: </label>
        <input type="number" id='songs_release' placeholder='release_date'
       value={data.songs_release}
       onChange={(e) => handle(e)}/>
        <label htmlFor=""> Songs Images </label>
        <input type="file" />
        <label htmlFor=""> Artist </label>
        <select name="Artists"
        id='songs_artist'
       value={data.songs_artist}
        onChange={(e) => handle(e)} >
               <option value="">Artists</option>
              <option >SP B</option>
             <option >K.J.Yesudas</option>
             <option >Udit Narayan</option>
             <option >AR.Rahman</option>
             <option >Arijith Singh</option>
             <option >Sid Sriram</option>
             <option >Shreya Ghoshal</option>
             <option >Arman Malik</option>
             <option >Asha Bhosle</option>
             <option >Justin Bieber</option>
        </select>
       
       <button className='artistbtn'> + Create Artists</button>
       <br />
       <button  className='btn' type='submit'>cancel</button>
    <button className='btn' type='submit'>save</button>
       {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
    </form>
    
    </div>
   

    </>
  )
}

  // const addSongs = `
  // mutation MyMutation {
  //   insert_artists_one(object: {})
  //   insert_songs(objects: {id: 10, songs_artist: "", songs_name: "", songs_release: ""})
  // }`


   

  //   const [songs_name, setSongName] = useState("");
  // const [releaseDate, setreleaseDate] = useState("");
  // const [message, setMessage] = useState("");
  // const [artistName, setArtistsName] = useState('');



  // let handleSubmit = async (e) => {

// console.log(songs_name);
//     e.preventDefault();
//     try {
//       let res = await fetch("https://above-jaybird-69.hasura.app/v1/graphql", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "X-hasura-admin-secret": "hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK",
//           },
//         body: JSON.stringify({
//             query:addSongs,
//           songs_name: songs_name,
//           releaseDate: releaseDate,
//           artistName: artistName,
//         }),
//       });
//       let resJson = await res.json();
//       console.log(resJson)
//       if (res.status === 200) {
//         setSongName("");
//         setreleaseDate("");
//         setArtistsName = ('');
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occured");
//     }
// } catch (err) {
//   console.log(err);

// }
// };

  // function submit(e){
    //     e.preventDefault();
    //     Axios.post(url,{
    //         songs_name:data.songs_name,
    //         songs_release: data.songs_release,
    //         songs_artist: data.songs_artist
    //     },{
    //         headers: {
    //                    "Content-Type": "application/json",
    //                     "X-hasura-admin-secret": "hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK"},
    //                     body: JSON.stringify({mutation: {songs_name, songs_release, songs_artist}})
    //     },
        
    //     )
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(res.data)
    //     })
    //      }

      // const navigate = useNavigate();
  //   const home = () => {
  //       navigate("/");}

//   var url = 'https://above-jaybird-69.hasura.app/v1/graphql'
  

//   AddSongs({
//     songs_name, songs_release, songs_artist
//   });{
    
//     let params ={
      
//                songs_artist: songs_artist,
//                     songs_img: songs_img,
//                     songs_name: songs_name,
//                    songs_ratings: songs_ratings,
//                     songs_release: songs_release
//     }
  

//   const query = `
//   mutation MyMutation($songs_name:String!, $songs_artist:String!, $songs_release:String!){


//     insert_songs_details(objects:{songs_name:$songs_name, songs_release: $songs_release, songs_artist:$songs_artist}){
//       returning{
//         songs_name
//         songs_release
//         songs_artist
//       }
//     }
//   }
//   `;

//   return axios({
//     url:url,
//     method:'POST',
//     headers:{
//       "content-type": "application/json",
//                        "X-hasura-admin-secret": "hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK"},
//        data:{
//          query,
//          variables:params,
//        }
//     })
// }

//     const query = `
//     mutation MyMutation 
       
//             insert_songs(objects: {id: 10, songs_artist: "songs_artist", songs_name: "songs_name", songs_release: "songs_release", songs_img: "songs_img"})
//           "
    
      

// `;
