/*
 * Reto #5
 * ASPECT RATIO DE UNA IMAGEN
 * Fecha publicación enunciado: 01/02/22
 * Fecha publicación resolución: 07/02/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea un programa que se encargue de calcular el aspect ratio de una imagen a partir de una url.
 * - Nota: Esta prueba no se puede resolver con el playground online de Kotlin. Se necesita Android Studio.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// Desde el navegador. No funciona con NodeJS
// Se requiere obtener el máximo común divisor para obtener el aspect ratio
const getGCD = (a, b) => {
   let temp;
   while (b !== 0) {
      temp = b;
       b = a % b;
       a = temp;
   }
   return a;
};

// Se obtiene el aspect ratio
function getAspectRatio(imageUrl) {
    const img = new Image();
    img.src = imageUrl.toString();
    let sizeArray = [];
    let gcd =  getGCD(img.width, img.height);

    sizeArray.push(img.width / gcd);
    sizeArray.push(img.height / gcd);

    return console.log(`El aspect ratio es: ${Math.max(...sizeArray)}:${Math.min(...sizeArray)}`);
    
 }

 getAspectRatio("https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png");