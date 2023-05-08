import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Cool from "./Components/Details/Cool";
import Contact from "./Components/Details/Contact";
import PersonalDetails from "./Components/Details/PersonalDetails";
import FamilyDetails from "./Components/Details/FamilyDetails";
import HabitDetails from "./Components/Details/HabitsDetail";
import OtpForm from "./Components/Details/Otp/Otp";
import ReligiousInformation from "./Components/Details/ReligiousInformation";
import PartnerPreferenceDetails from "./Components/Details/PartnerPreferenceDetails";
import Register from "./Components/Register/Register";
import Footer from "./Components/Foote/Footer";
import Home from "./Components/Home/Home";
import Matches from "./Components/Matches/Matches";
import Payment from "./Components/Payment/Payment";
import Header from "./Components/Header/Header";
import ViewProfile from "./Components/ViewProfile/Viewpro";
import ViewProfile1 from "./Components/ViewProfile/ViewProfile1";
import EditProfile from "./Components/EditPro/EditProfile";
import BasicDetails1 from "./Components/EditPro/BasicDetails1";
import EditPreference from "./Components/EditPro/EditPP";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/basic-info" element={<Cool />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PersonalDetails" element={<PersonalDetails />} />
        <Route path="/FamilyDetails" element={<FamilyDetails />} />
        <Route
          path="/ReligiousInformation"
          element={<ReligiousInformation />}
        />
        <Route path="/HabitDetails" element={<HabitDetails />} />
        <Route
          path="/PartnerPreferenceDetails"
          element={<PartnerPreferenceDetails />}
        />
        <Route path="/OtpForm" element={<OtpForm />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/matches"
          element={
            <>
              <Header /> <Matches />
            </>
          }
        />
                <Route path="/ViewProfile" element={<ViewProfile/>} />
                <Route path="/ViewProfile1" element={<ViewProfile1/>} />
                <Route path="/EditProfile" element={<EditProfile/>} />


                <Route path="/BasicDetails1" element={
                  <>   <Header />  <BasicDetails1/> 
</>
                } />
                
                <Route path="/EditPreference" element={
                  <>   <Header />  <EditPreference/> 
</>
                } />

        <Route
          path="/payment/paymentoption"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
