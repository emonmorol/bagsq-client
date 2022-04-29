import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddInventory from "./Pages/AddInventory/AddInventory";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import ProductInventory from "./Pages/ProductInventory/ProductInventory";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ProductInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/manageInventories"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/addinventory"
          element={
            <RequireAuth>
              <AddInventory />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
