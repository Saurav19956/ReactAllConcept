import { UserProvider, useUser } from "./UserContext"

const LoggedUser = ()=>{
  const {user} = useUser();
    return(
    <p>
      Hello !{user.name}
    </p>
    )
  }

const Header = ()=>{
  
  return (
    <header>
      <h2>
        Blog App
      </h2>
      <LoggedUser/>
    </header>
  )
}

const Page = ()=>{
  const {user} = useUser();
  return(
    <div>
      <h2>What is Lorem</h2>
      <p>Lorem </p>
      <p>written by {user.name}</p>
    </div>
  )
}

function App(){
  return(
    <div>
      <Header/>
      <Page/>
    </div>
  )
}

function Root(){
  return <UserProvider><App/></UserProvider> 
}

export default Root;