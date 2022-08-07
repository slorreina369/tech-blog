const editPostForm = document.querySelector('.edit-post-form');

async function editCommentForm(event){
    event.preventDefault();

  const body = document.querySelector('textarea[name="comment-body"]').value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace(`/dashboard/${id}`);
  } else {
    alert(response.statusText);
  }
}

editPostForm.addEventListener('submit', editCommentForm);