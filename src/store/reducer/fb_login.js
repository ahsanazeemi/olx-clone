const INITIAL_STATE = {
    userName: undefined,
    userPhoto: undefined,
    userMail: undefined
}
export default (state = INITIAL_STATE, action) => {
    if (action.type === 'FBLOGIN') {
        return {
            ...state,
            userPhoto: action.userPhoto,
            userName: action.userName,
            userMail: action.userMail
        }
    }
    return state
}