import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import EditPage from "./EditPage";

const EditProfileScreen = () => {
    return (
        <div>
            <div className="row pt-3">
                <div className="col-3 col-lg-2 col-xl-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-9 col-lg-6 col-xl-6">
                    <EditPage/>
                </div>
                <div className="col-lg-4 col-xl-4 d-none d-lg-block ps-4">
                    <PostSummaryList title="What's happening"/>
                </div>
            </div>
        </div>
    );
}

export default EditProfileScreen;