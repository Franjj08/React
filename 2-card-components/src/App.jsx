// import Card from "./Card"
// import Button from "./Button/Button"
// import Student from "./Student";
import UserGreeting from "./UserGreeting";
function App() {
  return(
    // fragmente:<></>
    // <>
    //   <Card/>
    //   <Card/>
    // </>
    // <Button/>
    
    // 3-props
      // <>
      //   <Student name ="Spongebob" age={30} isStudent={true}/>
      // </>
    <>
      <UserGreeting isLoggedIn={true} username="Fran"/>
    </>
  );
}

export default App
