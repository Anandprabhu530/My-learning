// import { Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import SignUp from "./components/Signup";
// import Test from "./components/usememohook";
import Parent from "./components/Parent";
import { RecoilRoot } from "recoil";
const App = () => {
  return (
    // <Routes>
    //   <Route path="/signup" element={<SignUp />}></Route>
    //   <Route path="/login" element={<Login />}></Route>
    //   <Route path="/usememo" element={<Test />}></Route>
    // </Routes>
    <div>
      <RecoilRoot>
        <Parent />
      </RecoilRoot>
    </div>
  );
};

export default App;
