const domainReducer = (state = 0, action) => {
    switch (action.type) {
        case "NEEDDOMAIN":
            return 8;
        case "NONEEDDOMAIN":
            return 0;
        default:
            return 0;
    }
}
export default domainReducer;