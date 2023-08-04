import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Namann Luthra",
    major: 'Electronics & Comp. Engineering',
    location: "Thapar University",
    tagline: "I'm a Frontend-Developer",
    subtagline: "JS | React | Data Structures & Algorithm",
    email: "namannluthra2002@gmail.com",
    contactno: "+918527115075",
    availability: "Open to Work",
    skills: "React.js | JavaScript | Data Structures & Algorithm | Bootstrap | Firebase" ,
    brand:
      "Passionate and dedicated Final year college student seeking a challenging internship opportunity in field of web-development.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
