import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type){
        case 'update-profile':
            return (state);
            break;
        default:
            return(state);
    }
};

export default profile;