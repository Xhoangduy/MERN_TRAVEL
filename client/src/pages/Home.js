import React from "react";
// import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
// import Notification from "../components/Notification";
import Login from "../components/user/Login";
import BottomNav from "../components/BottomNav";
// import Room from "../components/rooms/Room";

const Home = () => {
  return (
    <>
      {/* <Loading /> */}
      {/* <Notification /> */}
      <Login />
      <NavBar />
      <BottomNav />

      {/* <Room /> */}
    </>
  );
};

export default Home;
