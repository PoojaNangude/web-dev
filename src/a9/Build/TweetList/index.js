import React, {useEffect, useState} from "react";
import TweetListItem from "./TweetListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../services/twitterService";

let selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    // const tweets = useSelector(selectAllTweets);
    // const dispatch = useDispatch();
    const [tweets, setTweets] = useState([]);



    useEffect(() => {
            fetchAllTweets().then(tweets => setTweets(tweets))
        })


    return(
        <div>
            { tweets !== undefined &&
            <ul className="list-group">
                {

                    tweets.map(tweet =>
                        <TweetListItem tweet={tweet}/>
                    )
                }
            </ul>
            }

        </div>
    )
};
export default TweetList;
