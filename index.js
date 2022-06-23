function writeCards(stringNames, eventName) {
    let thankYouMessage = []
    for (let i = 0; i < stringNames.length; i++) {
        thankYouMessage.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYouMessage;
}

function countDown(positiveInteger) {
    while (positiveInteger > 0) {
        console.log(positiveInteger);
        positiveInteger--;
    }
    console.log(positiveInteger);
}