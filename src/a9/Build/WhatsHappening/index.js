import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet, fetchAllTweets} from "../../services/twitterService";
import service from "../../services/twitterService";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

const tweetClickHandler = () => {
    // service.postNewTweet({
    //     "topic": "Web Development",
    //     "userName": "jQuery",
    //     "verified": false,
    //     "handle": "jQuery",
    //     "title": "jQuery",
    //     "time": "last week",
    //     "logo-image": "https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png",
    //     "avatar-image": "../../../images/jquery.png",
    //     "tweets": "122K",
    //     "stats": {
    //         "comments": 123,
    //         "retweets": 234,
    //         "likes": 345
    //     },
    //     "tweet": whatsHappening
    // });
    const newTweet = {
        "topic": "Web Development",
        "userName": "jQuery",
        "verified": false,
        "handle": "jQuery",
        "title": "jQuery",
        "time": "last week",
        "logo-image": "https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png",
        "avatar-image": "../../../images/jquery.png",
        "tweets": "122K",
        "stats": {
            "comments": 123,
            "retweets": 234,
            "likes": 345
        },
        "tweet": whatsHappening
    }
    service.postNewTweet(dispatch,newTweet);
}




    return(
        <>
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={'https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs.jpg'}
                             className="rounded-circle"
                             style={{width: '48px', margin: '16px'}}/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                        <hr/>
                        <span>
                            <a href="#"><i className="fa fa-image me-3"></i></a>
                            <a href="#"><i className="fa fa-bar-chart me-3"></i></a>
                            <a href="#"><i className="fa fa-smile-o me-3"></i></a>
                            <a href="#"><i className="fa fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default WhatsHappening;