const backendDevReducer = (state = 0, action) => {
    switch (action.type) {
        case "NEEDBACKENDDEV":
            return 50;
        case "NONEEDBACKENDDEV":
            return 0;
        default:
            return 0;
    }
}
export default backendDevReducer;