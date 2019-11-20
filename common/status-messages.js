export const statusMessage = {
    '400': "Item cannot be empty",
    '404': "Item not found",
    '500': "Server side processing error"
};

export const displayStatusMessage = function(propName = 'message', statusCode = '500') {
    return {[propName]: statusMessage[statusCode]}
};