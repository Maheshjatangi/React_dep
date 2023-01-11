import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Latestrecipes from "./Components/Latestrecipes";
import Welcome from "./Components/Welcome";
import Latestvideos from "./Components/Latestvideos";
import Community from "./Components/Community";
import Latestarticles from "./Components/Latestarticles";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Latestrecipes/>
      <Welcome/>
      <Latestvideos />
      <Community />
      <Latestarticles />
    </div>
  );
}

export default App;
