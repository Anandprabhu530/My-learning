import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default App;
