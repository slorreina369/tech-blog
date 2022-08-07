const newPostForm = document.querySelector('.new-post-form');
const newPostBtn = document.querySelector('.new-post-btn');

async function newFormHandler(event){
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    const response = await fetch(`/api/posts`, {
        method:'POST',
        body:JSON.stringify({
            title,
            body
        }),
        headers:{
            'Content-Type':'application/json'
        }
    });

    if(response.ok){
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

function showForm(event){
    newPostForm.hidden = false;
    newPostBtn.hidden = true;

};

newPostBtn.addEventListener('click', showForm)
newPostForm.addEventListener('submit', newFormHandler);