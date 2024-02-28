import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import MyTrips from "./MyTrips";
import Profile from "./Profile";
import Socials from "./Socials";
import Navbar from "../components/Navbar";

export default function index() {
  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
}
