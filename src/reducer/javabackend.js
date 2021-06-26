const javaBackend = (state = 0, action) => {
    switch (action.type) {
        case "NEEDJAVABACKEND":
            return 70;
        case "NONEEDJAVABACKEND":
            return 0;
        default:
            return 0;
    }
}
export default javaBackend;