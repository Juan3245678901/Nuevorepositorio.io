function cipherText() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var input = document.getElementById('input').value.toLowerCase();
    var shiftAmount = parseInt(document.getElementById('shiftAmount').value);
    var output = document.getElementById('output');

    let encryptedMessage = "";

    for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        let index = alphabet.indexOf(letter);
        
        if (index === -1) {
            encryptedMessage += letter;
        } else {
            let newLetter = alphabet[(index + shiftAmount) % alphabet.length];
            encryptedMessage += newLetter;
        }
    }

    output.value = encryptedMessage;
}

function decipherText() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var inpu = document.getElementById('inpu').value.toLowerCase();
    var shiftAmount = parseInt(document.getElementById('shiftAmount').value);
    var outpu = document.getElementById('outpu');

    let originalMessage = "";

    for (let i = 0; i < inpu.length; i++) {
        let letter = inpu[i];
        let index = alphabet.indexOf(letter);
        
        if (index === -1) {
            originalMessage += letter;
        } else {
            let originalIndex = (index - shiftAmount + alphabet.length) % alphabet.length;
            let originalLetter = alphabet[originalIndex];
            originalMessage += originalLetter;
        }
    }

    outpu.value = originalMessage;
}


