import React, { useEffect, useState } from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Features } from "./features";
import { Navigation } from "./navigation";
import { Services } from "./services";
import JsonData from "../data/data.json";
import smoothScrollPolyfillsMin from "smooth-scroll";

export const scroll = new smoothScrollPolyfillsMin('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Features data={landingPageData.Features} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;
