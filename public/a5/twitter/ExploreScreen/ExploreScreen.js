import NavigationSidebar from "./NavigationSidebar/index.js";
// import NavigationSidebar from '../NavigationSideBar/index';
import ExploreComponent from "./ExploreComponent/ExploreComponent.js";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList.js";

$('#wd-explore').append(`
    <div class="container pt-4 wd-font-size">
        <div class="row">
            <div class="col-3 col-lg-2 col-xl-2">
            ${NavigationSidebar('explore')}
            </div>
            <div class="col-9 col-lg-6 col-xl-6">
            ${ExploreComponent()}
            </div>
            <div class="col-lg-4 col-xl-4 d-none d-lg-block">
            ${WhoToFollowList()}
            </div>
        </div>
    </div>
`);
