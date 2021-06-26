const phpBackend = (state = 50, action) => {
    switch (action.type) {
        case "NEEDPHPBACKEND":
            return 50;
        case "NONEEDPHPBACKEND":
            return 0;
        default:
            return 50;
    }
}
export default phpBackend;