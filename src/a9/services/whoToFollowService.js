const WHO_TO_FOLLOW_API = 'http://localhost:4000/rest/whotofollow';

export const fetchWhoToFollowList = () =>
    fetch(WHO_TO_FOLLOW_API).then(response => response.json());