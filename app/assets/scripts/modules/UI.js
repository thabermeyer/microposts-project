class UI {

    constructor() {

        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.postbox__btn');
        this.forState = 'add';

    }

    showPosts(posts) {

        let output = '';

        posts.forEach((post) => {

            output += `
            
                <div class="postbox__post">
                
                    <div class="postbox__post-content">
                    
                        <h4 class="header-4">${post.title}</h4>
                        <p class="paragraph">${post.body}</p>

                        <a href="#" class="postbox__link edit" data-id="${post.id}"><i class="fa fa-pencil"></i></a>

                        <a href="#" class="postbox__link delete" data-id="${post.id}"><i class="fa fa-remove"></i></a>

                    </div>
                
                </div>

            `;

        });

        this.post.innerHTML = output;

    }

    showAlert(message, className) {

        this.clearAlert();

        // Create div

        const div = document.createElement('div');

        // Add classes

        div.className = className;

        // Add text

        div.appendChild(document.createTextNode(message));

        // Get parent

        const container = document.querySelector('.postbox__container');

        // Get posts

        const posts = document.querySelector('#posts');

        // Insert alert div

        container.insertBefore(div, posts);

        // Timeout

        setTimeout(() => {

            this.clearAlert();

        }, 3000);

    }

    // Remove current alert if on the page

    clearAlert() {

        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {

            currentAlert.remove();

        }

    }

    // Clear out title/body fields for next submission

    clearFields() {

        this.titleInput.value = '';
        this.bodyInput.value = '';

    }

    // Fill form to edit

    fillForm(data) {

        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState('edit');

    }

    // Clear ID hidden value

    clearIdInput() {

        this.idInput.value = '';

    }

    // Change the form state

    changeFormState(type) {

        if(type === 'edit') {

            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'postbox__btn postbox__btn--edit';

            // Create cancel button

            const button = document.createElement('button');
            button.className = 'postbox__btn postbox__btn--cancel';
            button.appendChild(document.createTextNode('Cancel Edit'));

            // Get parent

            const cardForm = document.querySelector('.postbox__form');

            // Get element to insert before

            const formEnd = document.querySelector('.postbox__form-end');

            // Insert cancel button

            cardForm.insertBefore(button, formEnd);

        } else {

            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'postbox__btn postbox__btn--primary';

            // Remove cancel button if it's there

            if(document.querySelector('.postbox__btn--cancel')) {

                document.querySelector('.postbox__btn--cancel').remove();

            }

            // Clear ID from hidden field

            this.clearIdInput();

            // Clear text

            this.clearFields();

        }

    }

}

export const ui = new UI();