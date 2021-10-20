import NavigationSidebar from "./NavigationSidebar/index.js";
import PostSummaryList from "./PostSummaryList/PostSummaryList.js";
import PostList from "./PostList/PostList.js";

$('#wd-home').append(`
    <div class="container pt-4 wd-font-size">
        <div class="row">
            <div class="col-3 col-lg-2 col-xl-2">
            ${NavigationSidebar('home')}
            </div>
            <div class="col-9 col-lg-7 col-xl-7">
            ${PostList()}
            </div>
            <div class="col-lg-3 col-xl-3 d-none d-lg-block ps-4">
            ${PostSummaryList()}
            </div>
        </div>
    </div>
`);
