import React from 'react';


const PostSummaryListItem = (props) => {
    return(
        <div className="row border wd-font-size pt-3 pb-3 wd-dark-mode-list-background">
            <div className="col-9">
                <div className="wd-title pt-1">{props.topic}</div>
                <div className="wd-float-left wd-text-bold wd-font-color-white">{props.userName}</div>
                <i className="fa fa-check-circle float-start pt-1 pe-1"></i>
                <div className="wd-duration"> - {props.time}</div>
                <div className="wd-text-bold wd-font-color-white">
                    {props.title}
                </div>
                <div>
                    {props.tweets}
                </div>
            </div>

            <div className="col-3">
                <div className="row">
                    <img src={props.image}
                         alt="Not able to load"
                         height={125}/>
                </div>
            </div>
        </div>
    );
}

export default PostSummaryListItem;

