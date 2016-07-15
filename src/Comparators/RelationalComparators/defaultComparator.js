/*export default (e, d) => {
    if(e === d){
        return 0;
    } else if(e < d) {
        return -1;
    } else {
        return 1;
    }
}*/

export default (e, d) => e === d ? 0 : -1;