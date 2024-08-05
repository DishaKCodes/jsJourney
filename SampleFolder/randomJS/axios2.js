// Import Axios
const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    // Handle successful response
    console.log('Response:', response.data);
})
.catch(error => {
    // Handle error
    console.error('Error:', error);
});
//Remember, Axios returns Promises, allowing you to use async/await to handle asynchronous requests in a more synchronous style. For instance
async function fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();