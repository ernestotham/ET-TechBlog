const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#EmailInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        window.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
    
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  