import { useCartStore } from '../../store/cart.store';
import { formatCurrency, formatTaxRate } from '../../utils/calculations';
import styles from './BillSummary.module.css';

const BillSummary = () => {
  const {
    getSubtotal,
    getTax,
    getDiscount,
    getGrandTotal,
    discountPercent,
    promoApplied,
    promoCode,
  } = useCartStore();

  const subtotal = getSubtotal();
  const tax = getTax();
  const discount = getDiscount();
  const total = getGrandTotal();

  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>{formatCurrency(subtotal)}</span>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>Tax ({formatTaxRate()})</span>
        <span className={styles.value}>{formatCurrency(tax)}</span>
      </div>

      {discountPercent > 0 && (
        <div className={`${styles.row} ${styles.discount}`}>
          <span className={styles.label}>
            Discount {promoApplied && `(${promoCode})`}
          </span>
          <span className={styles.value}>-{formatCurrency(discount)}</span>
        </div>
      )}

      <div className={styles.divider}></div>

      <div className={`${styles.row} ${styles.total}`}>
        <span className={styles.label}>TOTAL</span>
        <span className={styles.value}>{formatCurrency(total)}</span>
      </div>
    </div>
    // added comments to the code
  );
};

export default BillSummary;
