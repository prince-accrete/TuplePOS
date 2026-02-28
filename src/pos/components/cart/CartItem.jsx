import { memo } from 'react';
import { useCartStore } from '../../store/cart.store';
import { formatCurrency } from '../../utils/calculations';
import styles from './CartItem.module.css';

const CartItem = memo(({ item }) => {
  const { incrementQuantity, decrementQuantity, updateItemNote } = useCartStore();

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageWrapper}>
        {item.image ? (
          <img src={item.image} alt={item.name} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>
            <i className="pi pi-image"></i>
          </div>
        )}
      </div>

      <div className={styles.details}>
        <h4 className={styles.name}>{item.name}</h4>
        <span className={styles.price}>{formatCurrency(item.price)}</span>
        <button
          className={styles.noteBtn}
          onClick={() => {
            const note = prompt('Add note for this item:', item.note || '');
            if (note !== null) {
              updateItemNote(item.id, note);
            }
          }}
        >
          <i className="pi pi-pencil"></i>
          {item.note && <span className={styles.hasNote}></span>}
        </button>
      </div>

      <div className={styles.actions}>
        <div className={styles.quantityControl}>
          <button
            className={styles.qtyBtn}
            onClick={() => decrementQuantity(item.id)}
          >
            <i className="pi pi-minus"></i>
          </button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button
            className={styles.qtyBtn}
            onClick={() => incrementQuantity(item.id)}
          >
            <i className="pi pi-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
});

CartItem.displayName = 'CartItem';

export default CartItem;
