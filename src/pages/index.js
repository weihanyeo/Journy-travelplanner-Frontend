//import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"
import LandingPage from "./LandingPage";

export default function Component() {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <p>Welcome back, {session.user.name}!</p>
      ) : (
        <div>
          <LandingPage />
        </div>
      )}
    </div >
  );
}
