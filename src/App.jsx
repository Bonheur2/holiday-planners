import React from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Navigation/Home";
import About from "./components/Navigation/About";
import Destination from "./components/Navigation/Destination";
import Tour from "./components/Navigation/Tour";
import Contact from "./components/Navigation/Contact";
import Footer from "./Footer";
import Login from "./components/Navigation/Login";
import Register from "./components/Navigation/Register";
import Dashboard from "./components/Navigation/Dashboard";
import SingleTour from "./components/Navigation/SingleTour";
import Users from "./components/Navigation/dashboard/Users";
import Tourdash from "./components/Navigation/dashboard/Tourdash";
<<<<<<< HEAD
=======
import TourDetail from "./components/Navigation/dashboard/TourDetail";
>>>>>>> e194052 (initial commit)
import Booking from "./components/Navigation/Booking";
import Setting from "./components/Navigation/Setting";
import BarChart from "./components/Navigation/dashboard/MYchart";

const Layout = () => {
  return (
    <div>
<<<<<<< HEAD
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
};
const Dash = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};
=======
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const Dash = () =>
{
  return(
    <div>
      <Dashboard/>
     </div>
  )
}
>>>>>>> e194052 (initial commit)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/tour" element={<Tour />} />
<<<<<<< HEAD
          <Route path="/tour/:id" element={<SingleTour />}></Route>
=======
            <Route path="/tour/:id" element={<SingleTour/>}></Route>
>>>>>>> e194052 (initial commit)
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>

<<<<<<< HEAD
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/tour" element={<Tour />}></Route>
        <Route path="/dashboard" element={<Dash />}>
          <Route path="barchart" element={<BarChart />} />
          <Route path="users" element={<Users />} />
          <Route path="dashtour" element={<Tourdash />} />
          <Route path="booking" element={<Booking />} />
          <Route path="setting" element={<Setting />} />
=======



        <Route path="/signup" element={<Register />} ></Route>
        <Route path="/tour" element={<Tour/>}></Route>
        <Route path="/dashboard"  element={<Dash />}>
          <Route path="barchart" element={<BarChart/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="dashtour" element={<Tourdash />}/>
        <Route path="booking" element={<Booking/>}/>
        <Route path="setting" element={<Setting/>}/>
>>>>>>> e194052 (initial commit)
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
