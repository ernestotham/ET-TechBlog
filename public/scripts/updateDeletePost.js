const UpdateFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const postTittle = document.querySelector('#TitleInput').value;
    const postBody = document.querySelector('#PostTextareaInput').value;
    const cardId = document.querySelector('.card-header');
  
    const response = await fetch(`/api/posts/${cardId.getAttribute("id")}`, {
        method: 'PUT',
        body: JSON.stringify({ postTittle, postBody }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        window.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  
  
    const DeleteFormHandler = async (event) => {
      event.preventDefault();
    
      const cardId = document.querySelector('.card-header');
      const response = await fetch(`/api/posts/${cardId.getAttribute("id")}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          window.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      }
    
    
  document.querySelector('#UpdatePostBtn').addEventListener('click', UpdateFormHandler);
  document.querySelector('#DeletePostBtn').addEventListener('click', DeleteFormHandler);
  