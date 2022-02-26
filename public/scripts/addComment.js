const addCommentHandler = async (event) => {
    event.preventDefault();
  console.log(event.target.getAttribute("id"))

    window.location.replace(`/post/${event.target.getAttribute("id")}`);
  
    }
  
  
 const cards = document.querySelectorAll('.card');

 cards.forEach(card => card.addEventListener('click', addCommentHandler));

