window.cipher = {
  encode: (text, shifts) => {
    /* Acá va tu código */
    let cipEncode = ""; // Aquí se almacenan las letras reemplazadas, va a ser el nuevo mensaje.
    for (i = 0; i < text.lenght; i++) { // La función va recorriendo cada letra del string hasta llegar a la última.
      let txt = text.charCodeAt(i); // Aquí se traducen de letras a unicodes. 
        if (65 <= txt && txt <= 90) { // Poniendo rangos de los unicode para poder definir si son mayúsculas, minúsculas o todo lo demás. En éste caso son las mayúsculas.
          cipEncode += String.fromCharCode ((txt - 65 + shifts) % 26 + 65);// Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo al unicode corresponiente (string o letra) con las mayúsculas.  
        } else if (97 <= txt && txt <= 122) { // En éste caso son las minúsculas.
          cipEncode += String.fromCharCode ((txt - 97 + shifts)% 26 + 97);// Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo al unicode correspondiente (string o letra) con las minúsculas. 
        } else {cipEncode += text.charAt(i)} // Aquí se aplica el caso en que no sean letras.
    } return cipEncode; // Retorna el nuevo mensaje codificado.
  },

  decode: (text, shifts) => {
    /* Acá va tu código */
  }
}
