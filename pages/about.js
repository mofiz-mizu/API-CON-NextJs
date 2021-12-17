import { useState } from "react";
import AuthorDetails from "../components/AuthorDetails/AuthorDetails"
import authorDetails from "../components/AuthorDetails/AuthorDetails"
import { author } from "../data/author"


export default function About() {

    const last3 = author.slice(0, 1);
    const [users, setUsers] = useState(last3)

    return (
      <div >
        <h1>Details of Author </h1>

        {
            users.map(user => 
                <AuthorDetails user={user} key={user.id}></AuthorDetails>
            )
        }
        
      </div>
    )
  }
  