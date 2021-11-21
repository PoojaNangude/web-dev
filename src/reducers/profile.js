import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type){
        case 'fetch-user-profile':
            console.log('in fetch-user-profile', profileJson, action.profile);
            return (action.profile);
            break;
        case 'update-user-profile':
            // console.log('in update-user-profile', profileJson, action.profile);
            state[0] = action.profile;
            // console.log("state", state[0]);
            // console.log("action.profile", action.profile);
            console.log(state);
            return (state);
            break;
        case 'update-profile':
            return (state);
            break;
        default:
            return(state);
    }
};

export default profile;