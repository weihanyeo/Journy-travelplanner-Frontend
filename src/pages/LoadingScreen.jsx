"use client";
import { useSession } from "next-auth/react";

const LoadingScreen = ({ children }) => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  if (isLoading) {
    return <div>Loading...</div>; // Replace with your desired loading UI
  }

  return children;
};

export default LoadingScreen;
