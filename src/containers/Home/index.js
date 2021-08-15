import VermaBanner from "@components/Hero";
import TopNavbar from "@components/Navbar";
import React, { memo } from "react";
const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <VermaBanner />
    </>
  );
};

export default memo(HomePage);
