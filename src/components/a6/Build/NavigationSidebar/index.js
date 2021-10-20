import React from "react";

const NavigationSidebar = ({
    active = 'explore'
                           }) => {

    return(
        <div>
        <div class="list-group d-none d-lg-block">
                        <a href="#" className="list-group-item ${active === 'home' ? 'active' : ''}">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="#" className="list-group-item ${active === 'home' ? 'active' : ''">
                            <i className="fa fa-home"></i>
                            Home
                        </a>
                        <a href="../ExploreScreen/explore.html" className="list-group-item ${active === 'home' ? 'active' : ''">
                            <i className="fa fa-hashtag"></i>
                            Explore
                        </a>
                        <a href="#" className="list-group-item ${active === 'home' ? 'active' : ''">
                            <i className="fa fa-bell"></i>
                            Notifications
                        </a>
                        <a href="#" className="list-group-item ${active === 'home' ? 'active' : ''">
                            <i className="fa fa-envelope ${active === 'home' ? 'active' : ''"></i>
                            Messages
                        </a>
                        <a href="#" className="list-group-item ${active === 'home' ? 'active' : ''">
                            <i class="fa fa-bookmark"></i>
                            Bookmarks
                        </a>
                        <a href="#" className="list-group-item ${active === 'home' ? 'active' : ''">
                            <i className="fas fa-list"></i>
                            Lists
                        </a>
                        <a href="#" className="list-group-item ${active === 'home' ? 'active' : ''">
                            <i className="fas fa-user"></i>
                            Profile
                        </a>
                        <a href="#" className="list-group-item ${active === 'home' ? 'active' : ''">
                            <i className="fas fa-minus-circle"></i>
                            More
                        </a>
                    </div>

                    <div class="list-group d-lg-none">
                        <a href="#" className="list-group-item ${active === 'home' ? 'active' : ''" aria-current="true">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="#" className="list-group-item active">
                            <i className="fa fa-home"></i>
                        </a>
                        <a href="../ExploreScreen/explore.html" className="list-group-item">
                            <i className="fa fa-hashtag"></i>
                        </a>
                        <a href="#" className="list-group-item">
                            <i className="fa fa-bell"></i>
                        </a>
                        <a href="#" className="list-group-item">
                            <i className="fa fa-envelope"></i>
                        </a>
                        <a href="#" className="list-group-item">
                            <i className="fa fa-bookmark"></i>
                        </a>
                        <a href="#" className="list-group-item">
                            <i className="fas fa-list"></i>
                        </a>
                        <a href="#" className="list-group-item">
                            <i className="fas fa-user"></i>
                        </a>
                        <a href="#" className="list-group-item">
                            <i className="fas fa-minus-circle"></i>
                        </a>
                    </div>
                    <div className="row pt-3 pe-2">
                        <button type="button" className="btn btn-primary btn-lg btn-block rounded-pill">Tweet</button>
                    </div>
        </div>
    );
}
export default NavigationSidebar;