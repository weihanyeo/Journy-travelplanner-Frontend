export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/Planning", "/Profile"], // these are for the autorisation
  // what ever is in here requires u to login before viewing
};
