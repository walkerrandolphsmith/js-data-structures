export default (prop) => {
    return (e, d) => {
        if(e[prop] === d[prop]) {
            return 0;
        } else if(e[prop] < d[prop]) {
            return -1;
        } else {
            return 1;
        }
    };
};