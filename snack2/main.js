/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'] */

const stringsArray = [
    'sasso', 'carta', 'FORBICE', 'aSSO', 'fantE', 'CAVALLO', 're'
]

const formattedStringsArray = stringsArray.map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
})

console.log(formattedStringsArray)