const loginReducer = (state = false, action) => {
    console.log("action: ", action)
    switch (action.type) {
        case "LOGGEDIN":
            return !state;
        case "AUTH_LOGIN":
            return {
                ...state,
                user: { ...action.data },
                isLoggedIn: true
            }
        default:
            return state;
    }
}
export default loginReducer;