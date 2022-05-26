// import { Console } from "boost";
import gql from "graphql-tag";
import React from "react";
import Rating from './Rating';
// import ReactDOM from "react-dom";
// import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
// import { Query, ApolloProvider } from "react-apollo";


const SongsItems = `
query MyQuery {
  songs {
    id
    songs_artist
    songs_img
    songs_name
    songs_ratings
    songs_release
  }
}

`;

 function Tunes() {
    const [songs, setSongs ] = React.useState([]);
    React.useEffect(()=>{
        
       fetch('https://above-jaybird-69.hasura.app/v1/graphql', {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "X-hasura-admin-secret": "hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK",
         },
         // authorization: "Bearer <hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK>",
         body: JSON.stringify({query: SongsItems})
       }).then(res1 => res1.json())
     .then(data =>  setSongs (data.data.songs))
     }, []);
  return (
    <>

     <h1>TOP 10 SONGS</h1>
      <div className="mainmusiccontainer">
         {songs.map(musics => (
          
          <div className='musiccontainer'>
            <img  className="img" src={musics.songs_img} alt="" />
            <p> Artist Name:{musics.songs_artist}</p>
           <p>Song Name: {musics.songs_name}</p>
           <p> Realeased: {musics.songs_release}</p>
           <p> <Rating /></p>
            </div>
         ) )}         
    </div>
    </>
  )
}

export default Tunes





















// import gql from "graphql-tag";
// import React from "react";
// import ReactDOM from "react-dom";
// import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
// import { Query, ApolloProvider } from "react-apollo";

// // This setup is only needed once per application;
// const apolloClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: "undefined",
//   }),
// });

// const MY_QUERY_QUERY = gql`
//   query MyQuery {
//     artists {
//       artist_dob
//       artist_name
//     }
//   }
// `;





// const MyQueryQuery = (props) => {
//   return (
//     <Query
//       query={MY_QUERY_QUERY} >
//       {({ loading, error, data }) => {
//         if (loading) return <pre>Loading</pre>
//         if (error)
//           return (
//             <pre>
//               Error in MY_QUERY_QUERY
//               {JSON.stringify(error, null, 2)}
//             </pre>
//           );
    
//         if (data) {
//           return (
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           )
//         }
//       }}
//     </Query>
//   )
// };

// const container = (
//   <ApolloProvider client={apolloClient}>
//     <MyQueryQuery  />
//   </ApolloProvider>
// );

// ReactDOM.render(container, document.getElementById("root"))