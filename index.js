function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown(int) {
    while (int >= 0) {
     console.log(int);
        int--;
    }
}
