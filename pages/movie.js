import React from "react";
import Head from 'next/head'


export default function Movie({name, website}) {
    
  return (
    <div >
      <Head>ToDo List</Head>
      <h1>{name}</h1>
      <p>{website}</p>
      
      
    </div>
  )
}


