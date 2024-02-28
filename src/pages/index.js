import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import MyTrips from "./MyTrips";
import Profile from "./Profile";
import Socials from "./Socials";
import Navbar from "../components/Navbar";

export default function index() {
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* my code for the side menu bar does not seem to work without the script  */}
      <Navbar />
      <LandingPage />
    </div>
  );
}
