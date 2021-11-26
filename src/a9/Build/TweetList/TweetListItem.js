import React from "react";
import './tweet.css';
import TweetStats from "./TweetStats";
import {useDispatch} from "react-redux";
import {deleteTweet} from "../../services/twitterService";

const TweetListItem = ({tweet}) => {
    const dispatch = useDispatch();

    const deleteTweetClickHandler = () => {
        console.log("tweet to be deleted", tweet["_id"].toString())
        deleteTweet(tweet["_id"].toString());
    };

    return (
        <li className="list-group-item">
            <table>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle wd-avatar-image"
                             src={tweet['logo-image']}/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i onClick={deleteTweetClickHandler} className="fa fa-remove fa-pull-right"></i>
                        <span className="fw-bold">{tweet.userName}</span>
                        {tweet.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-secondary">@{tweet.handle}</span>
                        <div>
                            {tweet.tweet}
                        </div>
                        {
                            tweet.attachments && tweet.attachments.image &&
                            <img src={tweet.attachments.image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "100%"}}/>
                        }
                        {
                            tweet.attachments && tweet.attachments.video &&
                            <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{width: "100%"}}
                                    src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                        <TweetStats tweet={tweet}/>
                    </td>
                </tr>
            </table>
        </li>
    );
};

export default TweetListItem;