const TWEET_API = 'http://localhost:4000/rest/tweets';

export const fetchAllTweets = () =>
    fetch(TWEET_API).then(response => response.json());

export const postNewTweet = (dispatch ,newTweet) => {
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );
}

export const deleteTweet = (id) =>{
    console.log("id to be deleted", id, typeof (id));
    fetch(`${TWEET_API}/${id}`, {
        method: 'DELETE',
    });
}


export const likeTweet = (tweet) => {
    let tweetId = tweet["_id"].toString();
    console.log("a9 tweet id to be liked/unliked", tweetId);
    fetch(`${TWEET_API}/${tweetId}`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}



export default {
    fetchAllTweets, postNewTweet, deleteTweet, likeTweet
};

