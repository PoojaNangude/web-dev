import React from 'react';

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
        <div className="list-group-item" >
                        <div className="row">
                            <div className="col-2">
                                <img src={who["avatarIcon"]}
                                     alt="Not able to load"
                                     height={60}
                                     width={60}
                                className="rounded-circle float-start"
                                />
                            </div>
                            <div className="col-7">
                                <div>{who["userName"]}</div>
                                <i className="float-start"></i>
                                <div className="">@{who["handle"]}</div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <button type="button" className="btn btn-primary btn-block rounded-pill">Follow</button>
                                </div>
                            </div>
                        </div>
        </div>
    );
}
export default WhoToFollowListItem;