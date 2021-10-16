const PostSummaryItem = (post) => {
    return(`
        <div class="row wd-border-color-dark-mode wd-font-size pt-3 pb-3 wd-post-summary-list-font-size">
                                    <div class="col-8">
                                        <div class="wd-title pt-1">${post.topic}</div>
                                        <div class="wd-float-left wd-text-bold wd-font-color-white">${post.userName}</div>
                                        <i class="fa fa-check-circle wd-float-left wd-icon-dark-mode pt-1"></i>
                                        <div class="wd-float-left wd-duration"> - ${post.time}</div>
                                        <div style="clear;">&nbsp;</div>
                                        <div class="wd-text-bold wd-font-color-white">
                                        ${post.title}
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <img src=${post.image}
                                             class="wd-image-style pt-1"
                                        />
                                    </div>
                                </div>
    `);
}
export default PostSummaryItem;