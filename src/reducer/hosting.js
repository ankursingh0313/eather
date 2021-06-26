const hostingReducer = (state = 0, action) => {
    switch (action.type) {
        case "NEEDHOSTING":
            return 28;
        case "NONEEDHOSTING":
            return 0;
        default:
            return 0;
    }
}
export default hostingReducer;