import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/login";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=>state.user.currentUser);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../home" /> : <Login/>}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="../home" /> : <Signup />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../login" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="../login" />}
        />
      </Routes>
    </>
  );
}

export default App;
