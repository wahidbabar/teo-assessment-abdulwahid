import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
import Login from "./screens/Login";
import Splash from "./screens/Splash";
import DialScreen from "./screens/DialScreen";
import Calling from "./screens/Calling";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spinner" element={<Spinner />} />
          <Route path="/dialscreen" element={<DialScreen />} />
          <Route path="/calling" element={<Calling />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
