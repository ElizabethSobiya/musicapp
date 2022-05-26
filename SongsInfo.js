/*
This is an example snippet - you should consider tailoring it
to your service.
*/

import React from 'react'


async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
      "https://above-jaybird-69.hasura.app/v1/graphql",
      {
        method: "POST",
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      }
    );
  
    return await result.json();
  }
  
  const operationsDoc = `
    query MyQuery {
      __typename
    }
    
    query MyQueryCopy {
      __typename
    }
    
    mutation MyMutation {
      insert_songs(objects: {songs_img: "", songs_name: "songs_name", songs_artist: "songs_artist", songs_release: "songs_release"})
    }
  `;
  
  function fetchMyQuery() {
    return fetchGraphQL(
      operationsDoc,
      "MyQuery",
      {}
    );
  }
  
  function fetchMyQueryCopy() {
    return fetchGraphQL(
      operationsDoc,
      "MyQueryCopy",
      {}
    );
  }
  
  function executeMyMutation() {
    return fetchGraphQL(
      operationsDoc,
      "MyMutation",
      {}
    );
  }
  
  async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
  startFetchMyQuery();
  
  async function startFetchMyQueryCopy() {
    const { errors, data } = await fetchMyQueryCopy();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
  startFetchMyQueryCopy();
  
  async function startExecuteMyMutation() {
    const { errors, data } = await executeMyMutation();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
  startExecuteMyMutation();