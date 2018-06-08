export function addMessage(user, text) {
    const message = {};
    message['user'] = user;
    message['text'] = text;
    
    return {
        type: "ADD_MESSAGE",
        payload: message
    };
}
