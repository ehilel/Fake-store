import styles from './CategoryPage.module.css';
import { getProductsByCategory, getProductsByCategory1 } from '../../service/store';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams(); 
    
    useEffect(() => {
        if(category === "books"){
            console.log({category});
            getProductsByCategory1()
            .then((res) => { setProducts(res); });
        }
        else{
            getProductsByCategory(category)
            .then((res) => { setProducts(res); });
        }
    }, [category]);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.sidebar}>
                <h2>Categories</h2>
                <ul>
                    <li>
                        <Link to="/category/electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/category/jewelery">Jewelery</Link>
                    </li>
                    <li>
                        <Link to="/category/books">Books</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.content}>
                <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                {products.length > 0 ? (
                    <div className={styles.cardContainer}>
                        {products.map(product => (
                            <div className={styles.card} key={product.id}>
                                <h3>{product.title}</h3>
                                <img src={product.image} alt={product.title} />
                                <p><strong>Price: ${product.price}</strong></p>
                                <div>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h2>No products found</h2>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
