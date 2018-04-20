import { http } from './modules/HTTP';
import { ui } from './modules/UI';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {

    http.get('http://localhost:3000/posts')
    .then(data =>  ui.showPosts(data))
    .catch(err => console.log(err));

}