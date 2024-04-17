import "./globals.css";
import React from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosClient from "../others/network/axiosClient";

// New custom hook
const useCheckSession = () => {
  const router = useRouter();
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    // Check the user's session on component mount
    const checkSession = async () => {
      try {
        const response = await axiosClient.get('/members/register');
        // Update the user data in the application state
        setUserData(response.data);
      } catch (error) {
        // Handle session-related errors (e.g., token expired)
        console.error('Error checking session:', error);
        // Check if the current URL is either '/profile' or '/planning'
        if (router.pathname === '/profile' || router.pathname === '/planning') {
          // Redirect the user to the login page
          router.push('/Login');
        }
      }
    };
    checkSession();
  }, [router]);

  return userData;
};

export default function App({ Component, pageProps }) {
  const userData = useCheckSession();

  return (
    <div>
      <NavBar userData={userData} />
      <Component {...pageProps} />
      <div style={{ paddingBottom: "15%" }} />
      <Footer />
    </div>
  );
}
