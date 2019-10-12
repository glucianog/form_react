export const cepMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{5})(\d{1,2})/, '$1-$2') // captura o primeiro grupo de número com 5 dígitos
      .replace(/(-\d{3})\d+?$/, '$1') // captura 3 numeros após um hífen e não evita inserções
}