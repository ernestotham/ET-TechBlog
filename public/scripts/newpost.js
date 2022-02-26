 
  const AddNewPost = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#NewPostTitleInput').value
    const post_body = document.querySelector('#NewPostContentInput').value
    
  
    if (post_title && post_body) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ post_title, post_body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
    
  document.querySelector('#createBtn').addEventListener('click', AddNewPost);
  