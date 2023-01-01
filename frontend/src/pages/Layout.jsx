import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import NavBaroOther from "components/Navbar/NavBaroOther";

export default function Layout() {
  const location = useLocation();
  const isMain = location.pathname.indexOf("news") ===  1;
  return (
    <>
      <header>
        {isMain ? <NavBaroOther />: <Navbar /> }
      </header>
      <main className="wrapper">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
