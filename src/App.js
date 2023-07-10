import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Add from "./components/Add";
import { GlobalContext } from "./context/GlobalState";
import ActivityList from "./components/ActivityList";
import Watched from "./components/Watched";

function App() {
  return (
    <GlobalContext.Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ActivityList />} />
          <Route path="/Watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
