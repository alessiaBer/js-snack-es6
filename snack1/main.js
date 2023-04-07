/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */

const cars = [
    {
        brand: 'BMW',
        model: 'X5',
        engineType: 'Gasoline',
    },
    {
        brand: 'Tesla',
        model: 'Model Y',
        engineType: 'Electric',
    },
    {
        brand: 'Audi',
        model: 'A4',
        engineType: 'Gasoline',
    },
    {
        brand: 'Tesla',
        model: 'Model 3',
        engineType: 'Electric',
    },
    {
        brand: 'Chevrolet',
        model: 'Kalos',
        engineType: 'GPL',
    },
    {
        brand: 'Fiat',
        model: 'Panda',
        engineType: 'CNG',
    },
    {
        brand: 'Fiat',
        model: 'Grande Punto',
        engineType: 'GPL',
    },
    {
        brand: 'Subaru',
        model: 'Impreza',
        engineType: 'Gasoline',
    },
    {
        brand: 'Citroen',
        model: 'Cactus',
        engineType: 'Diesel',
    },
    {
        brand: 'Toyota',
        model: 'Yaris',
        engineType: 'Electric',
    }
]

const gasolineCars = cars.filter((car) => {
    return car.engineType === 'Gasoline'
})

const dieselCars = cars.filter((car) => {
    return car.engineType === 'Diesel'
})

const otherEngineTypes = cars.filter((car) => {
    return car.engineType !== 'Gasoline' && car.engineType !== 'Diesel'
})

console.log(gasolineCars)
console.log(dieselCars)
console.log(otherEngineTypes)

