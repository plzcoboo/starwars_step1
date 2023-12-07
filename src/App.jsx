import Foot from "./components/Foot/Foot";
import Header from "./components/Header/Header";
import Sub from "./components/Sub/Sub";

const App = () => {
  return (
    <div style={{background:"#11171a"}}>
      <Header />
      <Sub/>
      <Foot/> 
    </div>
  );
};

export default App;