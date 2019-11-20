export const log = (msg, obj) => {
    if(obj) {
        console.log(msg, obj);  // eslint-disable-line no-console
    } else {
        console.log(msg);       // eslint-disable-line no-console
    }
};