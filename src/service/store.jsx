export const getJeweleryProducts = () => {
    return fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
}

export const getElectronicsProducts = () => {
    return fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
} 