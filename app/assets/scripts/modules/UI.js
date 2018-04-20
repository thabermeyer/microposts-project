class UI {

    constructor() {

        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document. querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
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

}

export const ui = new UI();