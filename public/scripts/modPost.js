const modPostHandler = async (event) => {
    event.preventDefault();
  console.log(event.target.getAttribute("id"))

    window.location.replace(`/post/modify/${event.target.getAttribute("id")}`);
  
    }
  
    
 const cards = document.querySelectorAll('.card-header');

 cards.forEach(card => card.addEventListener('click', modPostHandler));

