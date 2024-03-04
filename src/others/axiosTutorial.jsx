

/**
 * in this file i will attempt to explain ways to use axios
 * functions in this file are not called or used anywhere in the app, 
 * simply used to showcase how i believe axios can be used.
 * feel free to comment and share your thoughts/comments
 */


import axios from 'axios';


function MyComponent() {
  
//here are the different functions we can use


//GET REQUEST
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // usually a function to process the response body
    // maybe transform it into string or a format that can be displayed
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
axios.get('/user', {
    
    params: {
      ID: 12345
    }
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
  axios.post('/user', 
  //request body below
  {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });



//say you want to load data when the page loads, aka automatically fetch data, look into using useEffect!
  useEffect(() => {
    //
    axios.get('/api/data')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    // Component JSX
  );
}

