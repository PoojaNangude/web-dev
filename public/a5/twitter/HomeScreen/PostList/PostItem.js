const PostItem = (post) => {
    return(`
        <div>
            <div class="row ">
                <div class="col-2">
                    <img src=${post.profileImage} class="wd-image-style rounded-circle pt-1"/>
                </div>
                <div class="col-10">
                    <div class="wd-float-left wd-text-bold wd-font-color-white">${post.userName}</div>
                    <i class="wd-float-left fa fa-check-circle wd-float-left-side-bar wd-icon-dark-mode pt-1"></i>
                    <div class="wd-float-left wd-user-handle">@${post.handle}</div>
                    <div> - ${post.time}</div>
                    <div class="wd-font-color-white">${post.tagline}</div>
                    <div class="row border-thin border-grey border-solid">
                        <img src=${post.descriptionImage} class="wd-post-image pt-1 pb-1"/>
                        <div class="wd-text-bold wd-font-color-white">
                        ${post.topic}
                        </div>
                        <div class="row ps-4 wd-user-handle">
                        ${post.description}
                        </div>
                        <div class="">
                        <i class="fa fa-link wd-icon-grey"><a class="ps-1 wd-hyperlink-grey" href="${post.link}">${post.linkText}</a></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-comment wd-icon"></i>${post.commentsCount}</a></div>
                        <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-retweet wd-icon"></i>${post.retweetsCount}</a></div>
                        <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-heart wd-heart-icon"></i>${post.likesCount}</a></div>
                        <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-upload wd-icon"></i></a></div>
                        <div style="clear:both;">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem;