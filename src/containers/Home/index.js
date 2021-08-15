import VermaAbout from "@components/About";
import VermaBanner from "@components/Hero";
import TopNavbar from "@components/Navbar";
import React, { memo } from "react";
const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <VermaBanner />
      <VermaAbout />
    </>
  );
};

export default memo(HomePage);
