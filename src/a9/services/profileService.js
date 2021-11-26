const PROFILE_API = 'http://localhost:4000/rest/profile';

export const getProfile = () =>
    fetch(PROFILE_API)
        .then(response => response.json())


// export const updateProfile = (dispatch, profile) =>
//     fetch(`${PROFILE_API}`, {
//         method: 'PUT'
//     })
//         .then(response =>
//             dispatch({
//                 type: 'update-user-profile',
//                 profile
//             }));

export const updateProfile = (profile) => {
    console.log("in db edit profile", profile._id);
    fetch(`${PROFILE_API}/${profile._id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}
