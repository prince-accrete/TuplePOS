import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useCartStore } from '../../store/cart.store';
import { usePosStore } from '../../store/pos.store';
import { TABLES } from '../../services/dummyData';
import { ORDER_TYPES, ORDER_TYPE_LABELS } from '../../utils/constants';
import CartItem from './CartItem';
import BillSummary from './BillSummary';
import styles from './CartPanel.module.css';

const CartPanel = () => {
  const { items, clearCart, applyPromoCode, removePromoCode, promoApplied, promoCode } = useCartStore();
  const { orderType, setOrderType, tableName, setTableName, customerName, setCustomerName, orderNumber } = usePosStore();
  const [promoInput, setPromoInput] = useState('');

  const orderTypeOptions = Object.entries(ORDER_TYPE_LABELS).map(([value, label]) => ({
    value,
    label,
  }));

  const tableOptions = TABLES.map((t) => ({
    value: t.name,
    label: t.name,
  }));

  const handleApplyPromo = () => {
    if (promoInput.trim()) {
      const success = applyPromoCode(promoInput);
      if (!success) {
        alert('Invalid promo code');
      }
      setPromoInput('');
    }
  };

  return (
    <div className={styles.cartPanel}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.titleRow}>
            <h2 className={styles.customerName}>{customerName || "Customer's Order"}</h2>
            <span className={styles.orderNumber}>Order Number {orderNumber}</span>
          </div>
          <button className={styles.editBtn}>
            <i className="pi pi-pencil"></i>
          </button>
        </div>

        <div className={styles.controls}>
          <Dropdown
            value={tableName}
            options={tableOptions}
            onChange={(e) => setTableName(e.value)}
            placeholder="Select Table"
            className={styles.dropdown}
          />
          <Dropdown
            value={orderType}
            options={orderTypeOptions}
            onChange={(e) => setOrderType(e.value)}
            className={styles.dropdown}
          />
        </div>
      </div>

      {/* Cart Items */}
      <div className={styles.itemsContainer}>
        {items.length === 0 ? (
          <div className={styles.emptyCart}>
            <i className="pi pi-shopping-cart"></i>
            <p>Your cart is empty</p>
            <span>Add items from the menu</span>
          </div>
        ) : (
          <div className={styles.itemsList}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {/* Bill Summary */}
      {items.length > 0 && (
        <div className={styles.billSection}>
          <BillSummary />
        </div>
      )}

      {/* Promo & Actions */}
      <div className={styles.footer}>
        {items.length > 0 && (
          <div className={styles.promoSection}>
            {promoApplied ? (
              <div className={styles.promoApplied}>
                <span className={styles.promoTag}>
                  <i className="pi pi-check-circle"></i>
                  Promo Applied
                </span>
                <button onClick={removePromoCode} className={styles.removePromo}>
                  <i className="pi pi-times"></i>
                </button>
              </div>
            ) : (
              <div className={styles.promoInput}>
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleApplyPromo()}
                />
                <button onClick={handleApplyPromo}>Apply</button>
              </div>
            )}
          </div>
        )}

        <div className={styles.paymentButtons}>
          <button className={styles.qrisBtn}>
            QRIS
          </button>
          <button className={styles.placeOrderBtn}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
