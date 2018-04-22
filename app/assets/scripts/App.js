import { http } from './modules/HTTP';
import { ui } from './modules/UI';

// Get posts on DOM load

document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post

document.querySelector('.postbox__btn').addEventListener('click', submitPost);

// Listen for delete

document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state

document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for cancel

document.querySelector('.postbox__form').addEventListener('click', cancelEdit)


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
    const id = document.querySelector('#id').value;

    const data = {

        title,
        body

    }

    if(title === '' || body === '') {

        ui.showAlert('Please fill in all fields', 'alert alert--danger');

    } else {

        // Check for ID

        if(id === '') {

            // Create Post
                
            http.post('http://localhost:3000/posts', data)
            .then(data => {
                ui.showAlert('Post added', 'alert alert--success');
                ui.clearFields();
                getPosts();
            })
            .catch(err => console.log(err));

        } else {

            // Update Post

            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(data => {
                ui.showAlert('Post updated', 'alert alert--success');
                ui.changeFormState('add');
                getPosts();
            })
            .catch(err => console.log(err));

        } 

    }

}

function deletePost(e) {

    if(e.target.parentElement.classList.contains('delete')) {

        const id = e.target.parentElement.dataset.id;

        // Delete Post

        if(confirm('Are you sure?')) {

            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                ui.showAlert('Post deleted', 'alert alert--success');
                getPosts();
            })
            .catch(err => console.log(err));
    
        }

    }

    e.preventDefault();

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

// Cancel edit state

function cancelEdit(e) {

    if(e.target.classList.contains('postbox__btn--cancel')) {

        ui.changeFormState('add');

    }

    e.preventDefault();

}