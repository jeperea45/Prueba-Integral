// -------------------------------
// ETAPA 1: Algoritmos y Lógica
// -------------------------------
/**
 * Ejercicio 1: Frecuencias Máximas
 * Dada una lista de números enteros, esta función retorna
 * los 2 valores más frecuentes junto a su cantidad de apariciones.
 */
function dosMasFrecuentes(arr) {
    const frecuencia = {};
    arr.forEach(num => {
    frecuencia[num] = (frecuencia[num] || 0) + 1;
    });
    // Convertir el objeto de frecuencias en un array de [valor, count]
    const freqArray = Object.entries(frecuencia);
    // Ordenar el array de mayor a menor según la frecuencia
    freqArray.sort((a, b) => b[1] - a[1]);
    // Tomar los dos primeros elementos
    const top2 = freqArray.slice(0, 2);
    return top2.map(([num, count]) => ({ num: Number(num), count }));
}

  // lista
const lista = [3, 5, 3, 2, 4, 5, 1, 3, 2, 2, 2];
console.log("Dos valores más frecuentes:", dosMasFrecuentes(lista));

/**
   * Ejercicio 2: Ordenar Objetos con Restricciones
   * Dado un array de objetos con { id, prioridad } donde prioridad es un número de 1 a 5,
   * esta función ordena el array de modo que primero aparezcan los objetos con prioridades impares
   * y luego los pares, respetando el orden original de cada grupo.
   */
function ordenarObjetosPorPrioridad(arr) {
    // Filtramos los objetos con prioridades impares y pares
    const impares = arr.filter(item => item.prioridad % 2 !== 0);
    const pares = arr.filter(item => item.prioridad % 2 === 0);
    // Concatenamos los dos grupos manteniendo su orden
    return [...impares, ...pares];
}

  // Ejercicio 2
const objetos = [
    { id: 1, prioridad: 3 },
    { id: 2, prioridad: 2 },
    { id: 3, prioridad: 5 },
    { id: 4, prioridad: 4 },
    { id: 5, prioridad: 1 },
    { id: 6, prioridad: 2 }
];
console.log("Objetos ordenados:", ordenarObjetosPorPrioridad(objetos));