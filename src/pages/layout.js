import React from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import MyTrips from "./MyTrips";
import Profile from "./Profile";
import Socials from "./Socials";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const landingPage = "/landing";
  const loginPage = "/login";
  const myTrips = "/plannings";
  const profilePages = "/profile";
  const socials = "/socials";

  return (
    <div>
      
      {router.pathname.includes(landingPage) ? <LandingPage /> : <></>}
      {/* {router.pathname.includes(loginPage) ? <LoginPage /> : null}
      {router.pathname.includes(myTrips) ? <MyTrips /> : null}
      {router.pathname.includes(profilePages) ? <Profile /> : null}
      {router.pathname.includes(socials) ? <Socials /> : null}*/}
      {children} 
    </div>
  );
}