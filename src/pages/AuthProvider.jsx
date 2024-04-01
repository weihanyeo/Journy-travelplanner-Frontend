"use client";
import { SessionProvider } from "next-auth/react";
import LoadingScreen from "./LoadingScreen"; // Create a new component for the loading screen

const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <LoadingScreen>{children}</LoadingScreen>
    </SessionProvider>
  );
};

export default AuthProvider;
