const NavigationSidebar = (active) => {
    return(`
        <div class="list-group d-none d-lg-block">
                        <a href="#" class="list-group-item">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="#" class="list-group-item ${active === 'home' ? 'active' : '' }">
                            <i class="fa fa-home"></i>
                            Home
                        </a>
                        <a href="../ExploreScreen/explore.html" class="list-group-item ${active === 'explore' ? 'active' : '' }">
                            <i class="fa fa-hashtag"></i>
                            Explore
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-bell"></i>
                            Notifications
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-envelope"></i>
                            Messages
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-bookmark"></i>
                            Bookmarks
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fas fa-list"></i>
                            Lists
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fas fa-user"></i>
                            Profile
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fas fa-minus-circle"></i>
                            More
                        </a>
                    </div>

                    <div class="list-group d-lg-none">
                        <a href="#" class="list-group-item" aria-current="true">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="#" class="list-group-item active">
                            <i class="fa fa-home"></i>
                        </a>
                        <a href="../ExploreScreen/explore.html" class="list-group-item">
                            <i class="fa fa-hashtag"></i>
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-bell"></i>
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-envelope"></i>
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-bookmark"></i>
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fas fa-list"></i>
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fas fa-user"></i>
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fas fa-minus-circle"></i>
                        </a>
                    </div>
                    <div class="row pt-3 pe-2">
                        <button type="button" class="btn btn-primary btn-lg btn-block rounded-pill">Tweet</button>
                    </div>
    `);
}
export default NavigationSidebar;