import { Routes, Route } from "react-router";
import "./style.scss"
import Home from "./Home";

function App() {
  return (
    <div className="w-screen overflow-hidden">
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
    </div>
  );
}

export default App;
