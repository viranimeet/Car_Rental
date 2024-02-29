import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./user/common/Header";
import Home from "./user/home/Home";
import ContactUs from "./user/contact_us/ContactUs";
import Footer from "./user/footer/Footer";
import Sign_in from "./user/login/Sign_in";
import Sign_up from "./user/login/Sign_up";
import Dashboard from "./admin/Dashboard";
import Header_Admin from "./admin/Header_Admin";
import Add_Car from "./admin/Add_Car";
import Manage_Car from "./admin/Manage_Car";
import Search_Car from "./user/serch_car/Search_Car";
import MakeRequest from "./user/serch_car/MakeRequest ";
import Manage_Request from "./admin/Manage_Request";
import My_Request from "./user/serch_car/My_Request";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Sign_in />} />
        <Route path="/register" element={<Sign_up />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/search_car" element={<Search_Car />} />
        <Route path="/make_request/:id" element={<MakeRequest />} />
        <Route path="/request" element={<My_Request />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add_car" element={<Add_Car />} />
        <Route path="/manage_car" element={<Manage_Car />} />
        <Route path="/all_request" element={<Manage_Request />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
