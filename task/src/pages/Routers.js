import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddScenario from "./AddScenario";
import AllScenario from "./AllScenario";
import AddVehicle from "./AddVehicle";
import Update from "./Update";
import Vupdate from "./Vupdate";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addscenario" element={<AddScenario />} />
      <Route path="/allscenario" element={<AllScenario />} />
      <Route path="/addvehicle" element={<AddVehicle />} />
      <Route path="/edit/:id" element={<Update />} />
      <Route path="/vedit/:id" element={<Vupdate />} />
    </Routes>
  );
};

export default Routers;
