exports.log = (msg, obj = undefined) => {
    if(obj) {
        console.log(msg, obj);  // eslint-disable-line no-console
    } else {
        console.log(msg);       // eslint-disable-line no-console
    }
};