export default function AuthorDetails(props) {
  const {name, email,phone} = props.user
    return (
      
     
      <div >
        <h1>Nmae: {name}</h1>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        
      </div>
    )
  }
  