async function editCommentFormHandler(event){
  event.preventDefault();
  const form = event.target;


  const comment_text = form.querySelector('textarea[name="comment-body"]').value.trim();

  const id = form.closest('.comment').dataset.id;
  const response = await fetch(`/api/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      comment_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

function showEditCommentForm(event){
  const comment = event.target.closest('.comment');
  const commentText = comment.querySelector('.text').innerText;
  const form = comment.querySelector('.comment-form');

  form.querySelector('textarea[name="comment-body"]').value = commentText;

  form.hidden = false;
}

document.querySelectorAll('.comment-form').forEach(editCommentForm =>{
  editCommentForm.addEventListener('submit', editCommentFormHandler);
});

document.querySelectorAll('.edit-button').forEach(editCommmentButton =>{
  editCommmentButton.addEventListener('click', showEditCommentForm);
});