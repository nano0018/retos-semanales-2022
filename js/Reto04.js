/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

class Polygon {
    constructor(edges = []) {
        this.edges = edges;
    }
    
    calculateArea() {

        let msg = "El área es:"

        switch (this.edges.length) {
            case 1:
                this.area =  Math.pow(this.edges[0], 2);  
                break;              
            case 2:                
                this.area = this.edges[0] * this.edges[1]; 
                break;
            case 3:
                const sideA = this.edges[0];
                const sideB = this.edges[1];
                const sideC = this.edges[2];
                const semiPerimeter = (sideA + sideB + sideC) / 2;
                // Heron formula
                this.area = Math.pow((semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC)), (0.5));
                break;
            default:
                msg = "No se puede determinar el área:";
                break;
        }

        return console.log(msg, this.area, "und^2");
    }

    printEdges() {
        let sideCount = 0
        for (const edge of this.edges) {
            sideCount += 1
            console.log(`Lado ${sideCount} = ${edge} und`);
        }
    }
}

const triangle = new Polygon([3, 5, 4]);
triangle.printEdges();
triangle.calculateArea();

const rectangle = new Polygon([5, 5]);
rectangle.printEdges();
rectangle.calculateArea();

const square = new Polygon([5]);
square.printEdges();
square.calculateArea();

const polygon1 = new Polygon([5, 6, 7, 8]);
polygon1.printEdges();
polygon1.calculateArea();