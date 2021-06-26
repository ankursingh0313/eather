const nodeBackend = (state = 0, action) => {
    switch (action.type) {
        case "NEEDNODEBACKEND":
            return 70;
        case "NONEEDNODEBACKEND":
            return 0;
        default:
            return 0;
    }
}
export default nodeBackend;