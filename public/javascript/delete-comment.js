async function deleteCommentFormHandler(event){
    event.preventDefault();
    const comment = event.target.closest('.comment');

    const id = comment.dataset.id;

      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE'
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
}

document.querySelectorAll('.delete-comment-btn').forEach(deleteCommentButton =>{
  deleteCommentButton.addEventListener('click', deleteCommentFormHandler)
});