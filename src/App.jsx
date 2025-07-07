import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;

