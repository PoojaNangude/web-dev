import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type){
        case 'fetch-user-profile':
            return (action.profile);
            break;
        case 'update-user-profile':
            state[0] = action.profile;
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