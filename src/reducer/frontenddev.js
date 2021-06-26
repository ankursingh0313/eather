const frontendDevReducer = (state = 0, action) => {
    switch (action.type) {
        case "NEEDFRONTENDDEV":
            return 50;
        case "NONEEDFRONTENDDEV":
            return 0;
        default:
            return 0;
    }
}
export default frontendDevReducer;