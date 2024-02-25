import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import MyTrips from "./MyTrips";
import Profile from "./Profile";
import Socials from "./Socials";

export default function index() {
  return (
    <div >
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      <LandingPage/>
      
    </div>
  );
}
