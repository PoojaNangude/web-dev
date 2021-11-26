import PostSummaryListItem from "./PostSummaryListItem";
import post from "./post.json";
import React from "react";

const PostSummaryList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">
                What's Happening
            </li>
            {
                post.map((p) => {
                    return(<PostSummaryListItem topic={p.topic} userName={p.userName} time={p.time} title={p.title} image={p.image} tweets={p.tweets}/>)
                })
            }
        </ul>
    );
}
export default PostSummaryList;

// {
//     post.map((p) => {
//         return(<PostSummaryListItem topic={p.topic} userName={p.userName} time={p.time} title={p.title} image={p.image} tweets={p.tweets}/>)
//     })
// }