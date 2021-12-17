import React, { useState, useContext } from "react";
import Head from 'next/head'
import Movie from "./movie";
import { TodoContexts } from "../components/TodoContext";


export default function MovieList() {
    const value = useContext(TodoContexts)
  return (
    <div >
      {/* <Head>ToDo List</Head>
      <h1>Todo List Dam</h1> */}
      <h3>{value}</h3>
      {/* {todo.map( task => (
          <Movie name={task.name} website={task.website} key={task.id}/>
      ) )} */}
      
    </div>
  )
}


