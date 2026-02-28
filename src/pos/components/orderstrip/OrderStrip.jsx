import { ACTIVE_ORDERS } from '../../services/dummyData';
import { ORDER_STATUS, ORDER_STATUS_LABELS, ORDER_STATUS_COLORS, ORDER_TYPE_LABELS } from '../../utils/constants';
import styles from './OrderStrip.module.css';

const OrderStrip = () => {
  return (
    <div className={styles.orderStrip}>
      <div className={styles.header}>
        <span className={styles.title}>Track Order</span>
        <button className={styles.expandBtn}>
          <i className="pi pi-arrow-up"></i>
        </button>
      </div>

      <div className={styles.orders}>
        {ACTIVE_ORDERS.map((order) => (
          <div key={order.id} className={styles.orderCard}>
            <div className={styles.avatar}>
              {order.customerName.charAt(0)}
            </div>
            <div className={styles.orderInfo}>
              <span className={styles.customerName}>{order.customerName}</span>
              <span className={styles.orderDetails}>
                {order.tableName} • {ORDER_TYPE_LABELS[order.orderType] || order.orderType}
              </span>
            </div>
            <div className={styles.statusSection}>
              <span
                className={styles.status}
                style={{
                  backgroundColor: `${ORDER_STATUS_COLORS[order.status]}15`,
                  color: ORDER_STATUS_COLORS[order.status],
                }}
              >
                {ORDER_STATUS_LABELS[order.status] || order.status}
              </span>
              <span className={styles.time}>{order.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStrip;
