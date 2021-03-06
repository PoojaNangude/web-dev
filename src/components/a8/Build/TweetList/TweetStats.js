import React from "react";
import {useDispatch} from "react-redux";
import {likeTweet} from "../../../../services/twitterService";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();

    const likeClickHandler = () => {
        likeTweet(dispatch, tweet);
    };

    return (<div className="row mt-2">
        {console.log("tweet a8", tweet.liked)}
        <div className="col">
            <i className="fa fa-comment me-2"></i>
            {tweet.stats.comments}
        </div>
        <div className="col">
            <i className="fa fa-retweet me-2"></i>
            {tweet.stats.retweets}
        </div>
        <div className="col" onClick={likeClickHandler}>
            {
                tweet.liked &&
                <i className="fa fa-heart me-2"
                   style={{color: tweet.liked ? 'red': "white"}}></i>
            }
            {
                !tweet.liked &&
                <i className="fa fa-heart me-2"></i>
            }
            {tweet.stats.likes}
        </div>
        <div className="col">
            <i className="fa fa-external-link-alt me-2"></i>
        </div>
    </div>)
}

export default TweetStats;