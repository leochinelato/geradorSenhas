function gerSenha() {
    const maiusculas = 'ABCDEFGHJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijkmnopqrstuvwxyz';
    const especiais = '@$#';
    const numeros = '0123456789';

    let password = '';

    password += maiusculas.charAt(Math.floor(Math.random() * maiusculas.length));
    password += minusculas.charAt(Math.floor(Math.random() * minusculas.length));
    password += especiais.charAt(Math.floor(Math.random() * especiais.length));
    password += numeros.charAt(Math.floor(Math.random() * numeros.length));

    for (let i = 0; i < 4; i++) {
        const charSet = maiusculas + minusculas + especiais + numeros;
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    document.getElementById('password').value = password;
}