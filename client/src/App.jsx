import { Routes, Route, Navigate } from "react-router-dom";

//components
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"
import ChangePrice from "./pages/ChangePrice/ChangePrice.jsx"

//context
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/changePrice" element={ authUser ? <ChangePrice /> : <Navigate to="/" /> } />
      </Routes>
    </>
  )
}

export default App
