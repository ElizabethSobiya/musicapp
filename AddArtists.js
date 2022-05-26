import React from 'react'
import { useState } from 'react';
import Axios from 'axios'; 
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function AddArtists() {



  const url = "https://above-jaybird-69.hasura.app/v1/graphql";
  const [data, setData] = useState({  
          songs_artist: '',
           songs_name: '',
           songs_release: ''
      
  }) 

  function submit(e){
    let params = `{artist_name: $artist_name,
      artists_dob: $artists_dob,
      artists_bio: $artists_bio}`
;


    const query =  `
    mutation MyMutation {
      insert_artists(objects: {artists_songs: "", artists_name: "artists_name", artists_dob: "artists_dob", artists_bio: "artists_bio"})
    }{
          returning{
             artists_name
             artists_dob
             artist_bio
           }
         }
       }`;

        
       e.preventDefault();
       fetch('https://above-jaybird-69.hasura.app/v1/graphql', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-hasura-admin-secret": "hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK"},       
         body: JSON.stringify({query,
            variables:{params}
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
   }

  return (
    <>
    <div className='artistData'> 
    <form action="" className='formArtistData' onSubmit= {(e)=> submit(e)}>
        <label htmlFor="" value={data.artist_name}  onChange={(e) => handle(e)}>Artist Name</label>
        <input type="text" />
        <label htmlFor=""  value={data.artist_dob} onChange={(e) => handle(e)}>Date of birth</label>
        <input type="date" />
        
        <label htmlFor="" value={data.artist_bio} onChange={(e) => handle(e)}>Bio</label>
        <textarea  name="" rows="4" cols="30"></textarea>
    </form>
   </div>
    </>
  )
}
