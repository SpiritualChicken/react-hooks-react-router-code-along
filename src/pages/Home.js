import users from "../data";
import UserCard from "../components/UserCard";
import { BrowserRouter, Route } from "react-router-dom";

function Home() {
  
  const userList = users.map(user =>{
    return <UserCard key={user.id} user={user}/>
  });

  return (
    <>
      <header>
        {/* place NavBar here */}
      </header>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
};

export default Home;