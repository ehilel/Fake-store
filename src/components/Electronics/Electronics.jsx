import styles from './Electronics.module.css';
import { getElectronicsProducts } from '../../service/store';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Electronics = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getElectronicsProducts()
            .then((res) => { setProducts(res); });
    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.sidebar}>
                <h2>Categories</h2>
                <ul>
                    <li>
                        <Link to="/Electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/Jewelery">Jewelery</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.content}>
                <h1>Electronics</h1>
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
                    <h2>No electronics products found</h2>
                )}
            </div>
        </div>
    );
};

export default Electronics;
