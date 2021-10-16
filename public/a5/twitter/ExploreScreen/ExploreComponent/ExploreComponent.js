import PostSummaryList from "../../../twitter/ExploreScreen/PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
    <div class="row">
                    <div class="col-10 wd-input-icons">
                        <i class="fas fa-search wd-icon-dark-model"></i>
                        <input type="text" class="wd-search-box-dark-mode wd-input-field"
                               placeholder="Search Twitter"/>
                        </span>
                    </div>
                    <div class="col-2">
                        <a href="explore-settings.html"><i class="fas fa-cog fa-2x pt-1"></i></a>
                    </div>
    </div>



                <div class="row pt-2">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a
                                    class="nav-link active"
                                    id="for-you-tab"
                                    data-mdb-toggle="tab"
                                    href="#foryou"
                                    role="tab"
                                    aria-controls="foryou"
                            >For You</a
                            >
                        </li>
                        <li class="nav-item" role="presentation">
                            <a
                                    class="nav-link"
                                    id="trending-tab"
                                    data-mdb-toggle="tab"
                                    href="#trending"
                                    role="tab"
                                    aria-controls="trending"
                            >Trending</a
                            >
                        </li>
                        <li class="nav-item" role="presentation">
                            <a
                                    class="nav-link"
                                    id="news-tab"
                                    data-mdb-toggle="tab"
                                    href="#news"
                                    role="tab"
                                    aria-controls="news"
                            >News</a
                            >
                        </li>
                        <li class="nav-item" role="presentation">
                            <a
                                    class="nav-link"
                                    id="sports-tab"
                                    data-mdb-toggle="tab"
                                    href="#sports"
                                    role="tab"
                                    aria-controls="sports"
                            >Sports</a
                            >
                        </li>
                        <li class="nav-item" role="presentation">
                            <a
                                    class="nav-link d-none d-md-block"
                                    id="entertainment-tab"
                                    data-mdb-toggle="tab"
                                    href="#entertainment"
                                    role="tab"
                                    aria-controls="entertainment"
                            >Entertainment</a
                            >
                        </li>
                    </ul>
                </div>

                <div class="tab-content">
                    <div class="tab-pane active" id="foryou" role="tabpanel" aria-labelledby="for-you-tab">

                        <div class="row ">
                            <div class="wd-container pt-1">
                                <img src="ExploreComponent/media_files/spaceship.jpg"
                                     class="wd-image-border"
                                     width="100%"
                                     height="100%"
                                >
                                <div class="wd-bottom-left">SpaceX's Starship</div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="trending" role="tabpanel" aria-labelledby="trending-tab">
                        Trending
                    </div>
                    <div class="tab-pane" id="news" role="tabpanel" aria-labelledby="news-tab">
                        News
                    </div>
                    <div class="tab-pane" id="sports" role="tabpanel" aria-labelledby="sports-tab">
                        Sports
                    </div>
                    <div class="tab-pane" id="entertainment" role="tabpanel" aria-labelledby="entertainment-tab">
                        Entertainment
                    </div>
                </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;