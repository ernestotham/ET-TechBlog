 
  const submitComment = async (event) => {
    event.preventDefault();
  
    
    const comment_body = document.querySelector('#submitCommentTextArea').value
    const post_id = document.querySelector('.card-header').getAttribute("id");
    
    const response = await fetch('/api/comms/', {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert(response.statusText);
      }
    }
  
  
    
  document.querySelector('#SubmitBtn').addEventListener('click', submitComment);
  