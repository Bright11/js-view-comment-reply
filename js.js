document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-reply');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const replies = event.target.nextElementSibling;
  
        if (replies.style.display === 'none') {
          replies.style.display = 'block';
        } else {
          replies.style.display = 'none';
        }
      });
    });
  });
