async function deleteFormHandler(event){
    event.preventDefault();

    const id = event.target.dataset.id;

      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
    
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
}

document.querySelectorAll('.delete-post-btn').forEach(deletePostButton =>{
  deletePostButton.addEventListener('click', deleteFormHandler)
});