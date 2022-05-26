import gql from "graphql-tag";
import React from "react";
// import ReactDOM from "react-dom";
// import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
// import { Query, ApolloProvider } from "react-apollo";


const Artist = `
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

 function Artists() {
    const [artists, setArtists] = React.useState([]);
    React.useEffect(()=>{
        
       fetch('https://above-jaybird-69.hasura.app/v1/graphql', {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "X-hasura-admin-secret": "hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK",
         },
         // authorization: "Bearer <hEl6BhgmXUU7fpmXAmcSmwxz6l8uxjmC6ZTOH2K1LTJYKQcgb62eZRH3VgoapVJK>",
         body: JSON.stringify({query: Artist})
       }).then(response => response.json())
     .then(data => setArtists(data.data.artists))
     }, []);
  return (
    <>

     <h1>TOP 10 ARTISTS</h1>
      <div className="maincontainer">
         {artists.map(artist => (
          <div className='container'>
            <img className="img" src={artist.artists_image} alt="" />
            <p> Artist Name: {artist.artists_name}</p>
           <p> D.O.B: {artist.artists_dob}</p>
           <p> Songs: {artist.artists_songs}</p>
           <p> Bio: {artist.artists_bio}</p>
            </div>
         ) )}
           {/* {artists.map((res=>(
             <img src= alt="" />
             <p className='' key={res.id}>{res.artists_name}</p>
             <p className='' key={res.id}>{res.artists_dob} </p>
             <p className='' key={res.id}> {res.artists_songs}</p>
             <p>ratings</p>
           ))} */}
          {/* //  <ul> {JSON.stringify(artists, null, 2)}</ul> */}
         
    </div>
    </>
  )
}

export default Artists
// const [result]= useQuery({
  //   query: MyQuery,
    
  // });
  // const {data, fetching, error} = result;
  // console.log(result)
  // if (fetching) return "Loading...";
  // if(error) return <prev>{error.message}</prev>


// This setup is only needed once per application;
// const apolloClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: "https://above-jaybird-69.hasura.app/v1/graphql",
//   }),
// });

// const MY_QUERY_QUERY = gql`
//   query MyQuery {
//     artists {
//       artists_bio
//       artists_dob
//       artists_image
//       artists_name
//       artists_songs
//       id
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

// ReactDOM.render(container, document.getElementById("root"));

