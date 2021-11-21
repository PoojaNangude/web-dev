const TWEET_API = 'http://localhost:4000/api/profile';

export const getProfile = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-user-profile',
                profile
                }
            )
        );



export const updateProfile = (dispatch, profile) =>
    fetch(`${TWEET_API}`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'update-user-profile',
                profile
            }));