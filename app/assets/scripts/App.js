import { http } from './modules/HTTP';
import { ui } from './modules/UI';

// Get posts on DOM load

document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post

document.querySelector('.postbox__btn').addEventListener('click', submitPost);

// Listen for delete

// document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state

document.querySelector('#posts').addEventListener('click', enableEdit);


// Get Posts

function getPosts() {

    http.get('http://localhost:3000/posts')
    .then(data =>  ui.showPosts(data))
    .catch(err => console.log(err));

}

// Submit Post

function submitPost() {

    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    const data = {

        title,
        body

    }

    // Create Post

    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post added', 'alert');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err));

}

// Enable Edit State

function enableEdit(e) {

    if(e.target.parentElement.classList.contains('edit')) {

        const id = e.target.parentElement.dataset.id;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;

        const data = {

            id,
            title,
            body

        }

        // Fill form with current post

        ui.fillForm(data);

    }

    e.preventDefault();

}