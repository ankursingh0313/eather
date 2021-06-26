const pythonBackend = (state = 0, action) => {
    switch (action.type) {
        case "NEEDPYTHONBACKEND":
            return 80;
        case "NONEEDPYTHONBACKEND":
            return 0;
        default:
            return 0;
    }
}
export default pythonBackend;