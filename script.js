function encryptMessage() {
    var originalMessage = document.getElementById("message").value;
    var shiftAmount = parseInt(document.getElementById("shift").value);

    if (!isNaN(shiftAmount)) {
        var encryptedMessage = "";
        var decryptionShift = -shiftAmount;

        for (var i = 0; i < originalMessage.length; i++) {
            var charCode = originalMessage.charCodeAt(i);
            var encryptedCharCode = charCode + shiftAmount;
            encryptedMessage += String.fromCharCode(encryptedCharCode);
        }

        document.getElementById("encryptedMessage").innerText = encryptedMessage;
        document.getElementById("decryptionShift").innerText = "Clé de déchiffrement : " + decryptionShift;
    } else {
        alert("Veuillez entrer un nombre valide pour la clé de déchiffrement.");
    }
}
