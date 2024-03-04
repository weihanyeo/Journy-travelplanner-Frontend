/**
 * in this file i will attempt to explain ways to use axios
 * functions in this file are not called or used anywhere in the app,
 * simply used to showcase how i believe axios can be used.
 * feel free to comment and share your thoughts/comments
 */

import axios from "axios";

function MyComponent() {
  /**
   * usually for api integration we will need the
   * (1) endpoint aka the api url
   * (2) request body (more common for POST requests) aka the data we want to send to BE
   * (3) response body (more common for GET requests) aka the data we want to recieve from BE
   */

  //GET REQUEST
  // Make a request for a user with a given ID
  //'/user?ID=12345' is the endpoint we are using
  axios
    .get("/user?ID=12345")
    .then(function (response) {
      // here is where we receive the response body
      // usually a function to process it
      // maybe transform it into string or a format that can be displayed
      // or if the data is alr in the correct form then we could just do setState()
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  // Optionally the request above could also be done as
  axios
    .get("/user", {
      params: {
        ID: 12345,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  //POST REQUEST
  axios
    .post(
      "/user",
      //request body below
      {
        firstName: "Fred",
        lastName: "Flintstone",
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  //say you want to load data when the page loads, aka automatically fetch data, look into using useEffect!
  useEffect(() => {
    //
    axios
      .get("/api/data")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
}
