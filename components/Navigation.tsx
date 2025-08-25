"use client";

import React from "react";
import { useEffect, useState } from "react";
import DesktopNav from "./dashboard/DesktopNav";
import MobileNav from "./dashboard/MobileNav";

export default function Navigation() {
  const [isDesktop, setIsDesktop]  = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth > 768);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="z-30">
      {
            isDesktop ? 
            <DesktopNav/> :
            <MobileNav/>
      }
    </div>
  )
}