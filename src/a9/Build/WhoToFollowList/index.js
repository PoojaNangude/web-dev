import React, {useEffect, useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
import {fetchWhoToFollowList} from '../../services/whoToFollowService';

const WhoToFollowList = () => {
    const [who, setWho] = useState([]);

    useEffect(() => {
        fetchWhoToFollowList().then(who => setWho(who))
    }, [])

    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">
                Who to follow
            </li>
            {
                who.map(who => {
                    return(
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;
