//  Reto #1
//  ¿ES UN ANAGRAMA?
//  Fecha publicación enunciado: 03/01/22
//  Fecha publicación resolución: 10/01/22
//  Dificultad: MEDIA

//  Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
//  Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
//  NO hace falta comprobar que ambas palabras existan.
//  Dos palabras exactamente iguales no son anagrama.

//  Información adicional:
//  - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
//  - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
//  - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
//  - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.

function anagram(word1, word2) {

    if (word1 === word2) {
        return false;
    }

    let set = new Set(word1);
    let set2 = new Set(word2);

    if (word1.length === word2.length) {
        for (const element of set) {
            if (!set2.has(element)) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

console.log(anagram("ANCESTRO", "CANTORES"));
console.log(anagram("ANCESTROS", "CANTORES"));
console.log(anagram("ANCESTROS", "ANCESTROS"));