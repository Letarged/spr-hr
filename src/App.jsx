import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Submited from "./Pages/Submited";
import Home from "./Pages/Home"; 
import ErrorPage from "./Pages/ErrorPage";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/submited" element={<Submited />} />
        <Route path="*" element={<ErrorPage />}/>

      </Routes>
    </Router>
  );
};

export default App;
