// import React from 'react'
import { FC } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Music from "./Pages/Music";
import Videos from "./Pages/Videos";
import SongDetails from "./Components/Client/MusicDetails/MusicDetails";
import Login from "./Components/Admin/Login/Login";
import Index from "./Components/Admin";
import Overview from "./Components/Admin/overview/overview";
import MakeEnquiry from "./Components/Admin/MakeEnquiry/MakeEnquiry";
import AllSong from "./Components/Admin/Reservation/Allsong";
import DjMix from "./Components/Admin/DjMix/DjMix";

const App: FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/details" element={<SongDetails />} />
        <Route path="/login" element={<Login />} />

        <Route path="admin" element={<Index />}>
          <Route path="overview">
            <Route index={true} element={<Overview />} />
          </Route>

          <Route path="upload-music">
            <Route index={true} element={<MakeEnquiry />} />
          </Route>

          <Route path="all-songs">
            <Route index={true} element={<AllSong />} />
          </Route>

          <Route path="djmix">
            <Route index={true} element={<DjMix />} />
          </Route>

          {/* <Route path="reservationhub">
            <Route index={true} element={<ReservationHub />} />
          </Route>

          <Route path="contact">
            <Route index={true} element={<AdminContact />} />
          </Route>

          <Route path="contacthub">
            <Route index={true} element={<AdminContactHub />} />
          </Route> */}
        </Route>
      </Routes>
    </main>
  );
};

export default App;
