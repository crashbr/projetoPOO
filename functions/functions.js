function validarString(value) {
    if (typeof(value) !== 'string' && typeof(value) !== 'undefined') throw `O ${value} precisa ser uma string`;
    return;
}

module.exports = validarString