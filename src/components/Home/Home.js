import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to Our Store</h1>
            <div className={styles.categories}>
                <div className={styles.category}>
                    <Link to="/category/electronics">
                        <img src="https://consumerelectronicsasia.com/img/consumer-electronics-in-all.webp" alt="Electronics" />
                        <h3>Electronics</h3>
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link to="/category/jewelery">
                        <img src="https://mfcollection.pk/wp-content/uploads/2022/09/Types-Of-Fashion-Jewelery-For-Girls-In-Pakistan.jpg" alt="Jewelery" />
                        <h3>Jewelery</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;


