import { memo } from 'react';
import { useCartStore } from '../../store/cart.store';
import { formatCurrency } from '../../utils/calculations';
import styles from './ProductCard.module.css';

const ProductCard = memo(({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleClick = () => {
    addItem(product);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        {product.image ? (
          <img src={product.image} alt={product.name} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>
            <i className="pi pi-image"></i>
          </div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <span className={styles.category}>{product.category}</span>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatCurrency(product.price)}</span>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
