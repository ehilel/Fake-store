
export const getProductsByCategory = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json());
};

export const getProductsByCategory1 = () => {
    return fetch(`http://localhost:8080/`)
        .then(res => res.json());
};

