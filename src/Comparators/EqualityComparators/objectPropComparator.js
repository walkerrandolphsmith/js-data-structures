export default (prop) => (e, d) => {
    if(!e || !d){
        return e === d;
    }
    else {
        return e[prop] === d[prop];
    }
}