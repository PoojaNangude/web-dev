import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
    return(
        <div>
            <ul>
                {
                    who.map((w) => {
                        return(<WhoToFollowListItem avatarIcon={w.avatarIcon} handle={w.handle} userName={w.userName}/>)
                    })
                }
            </ul>
        </div>

    );
}
export default WhoToFollowList;