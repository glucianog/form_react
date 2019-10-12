export const phoneMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})(\d)/, '($1) $2') // Captura o primeiro grupo para inserção de DDD
        .replace(/(\d{5})(\d{1,2})/, '$1-$2') // Captura o segundo grupo de número com 5 dígitos
        .replace(/(-\d{4})\d+?$/, '$1') // Captura o último grupo de números com 4 dígitos
  }