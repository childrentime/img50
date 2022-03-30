import { BrowserRouter, Routes, Route } from "react-router-dom";
import Img50 from "./pages/img50";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Img50 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
