"use client";

import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

function ResponsiveNev() {
  const [showNav, setShowNav] = useState(false);

  const showMobileNav = () => setShowNav(true);
  const closeMobileNav = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={showMobileNav}/>
      <MobileNav closeNav={closeMobileNav} showNav={showNav}/>
    </div>
  );
}

export default ResponsiveNev;
