import PostItem from "./PostItem.js";
import post from "./post.js";

const PostList = () => {
    return(`
        <ul class="list-group wd-font-size">
            ${
                        post.map(post => {
                        return(PostItem(post));
                        }).join('')
                        }
        </ul>
    `);
}
export default PostList;