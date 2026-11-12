const inputDecimal = document.getElementById('decimal');
const inputBinaire = document.getElementById('binaire');
const messageErreur = document.getElementById('message-erreur');
const btnEffacer = document.getElementById('btn-effacer');

// Conversion Décimal -> Binaire
inputDecimal.addEventListener('input', () => {
    const valeur = inputDecimal.value.trim();
    messageErreur.textContent = '';

    if (valeur === '') {
        inputBinaire.value = '';
        return;
    }

    // Vérifie que la saisie ne contient que des chiffres de 0 à 9
    if (/^\d+$/.test(valeur)) {
        const nombre = BigInt(valeur); // BigInt permet de gérer de très grands nombres
        inputBinaire.value = nombre.toString(2);
    } else {
        inputBinaire.value = '';
        messageErreur.textContent = 'Erreur : Entrez uniquement des chiffres entiers positifs (0-9).';
    }
});

// Conversion Binaire -> Décimal
inputBinaire.addEventListener('input', () => {
    const valeur = inputBinaire.value.trim();
    messageErreur.textContent = '';

    if (valeur === '') {
        inputDecimal.value = '';
        return;
    }

    // Vérifie que la saisie ne contient que des 0 et des 1
    if (/^[01]+$/.test(valeur)) {
        const nombre = BigInt('0b' + valeur);
        inputDecimal.value = nombre.toString(10);
    } else {
        inputDecimal.value = '';
        messageErreur.textContent = 'Erreur : Un nombre binaire ne contient que des 0 et des 1.';
    }
});

// Bouton pour réinitialiser les champs
btnEffacer.addEventListener('click', () => {
    inputDecimal.value = '';
    inputBinaire.value = '';
    messageErreur.textContent = '';
});
