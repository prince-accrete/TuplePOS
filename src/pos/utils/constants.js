// Order Types
export const ORDER_TYPES = {
  DINE_IN: 'DINE_IN',
  TAKEAWAY: 'TAKEAWAY',
  DELIVERY: 'DELIVERY',
};

export const ORDER_TYPE_LABELS = {
  [ORDER_TYPES.DINE_IN]: 'Dine In',
  [ORDER_TYPES.TAKEAWAY]: 'Take Away',
  [ORDER_TYPES.DELIVERY]: 'Delivery',
};

// Order Status
export const ORDER_STATUS = {
  OPEN: 'OPEN',
  KOT_PRINTED: 'KOT_PRINTED',
  IN_KITCHEN: 'IN_KITCHEN',
  READY: 'READY',
  SERVED: 'SERVED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
};

export const ORDER_STATUS_LABELS = {
  [ORDER_STATUS.OPEN]: 'Open',
  [ORDER_STATUS.KOT_PRINTED]: 'KOT Printed',
  [ORDER_STATUS.IN_KITCHEN]: 'On Kitchen Hand',
  [ORDER_STATUS.READY]: 'To be Served',
  [ORDER_STATUS.SERVED]: 'Served',
  [ORDER_STATUS.COMPLETED]: 'Completed',
  [ORDER_STATUS.CANCELLED]: 'Cancelled',
};

export const ORDER_STATUS_COLORS = {
  [ORDER_STATUS.OPEN]: '#3b82f6',
  [ORDER_STATUS.KOT_PRINTED]: '#f59e0b',
  [ORDER_STATUS.IN_KITCHEN]: '#f97316',
  [ORDER_STATUS.READY]: '#22c55e',
  [ORDER_STATUS.SERVED]: '#8b5cf6',
  [ORDER_STATUS.COMPLETED]: '#10b981',
  [ORDER_STATUS.CANCELLED]: '#ef4444',
};

// Payment Methods
export const PAYMENT_METHODS = {
  CASH: 'CASH',
  CARD: 'CARD',
  UPI: 'UPI',
  QRIS: 'QRIS',
  WALLET: 'WALLET',
};

export const PAYMENT_METHOD_LABELS = {
  [PAYMENT_METHODS.CASH]: 'Cash',
  [PAYMENT_METHODS.CARD]: 'Card',
  [PAYMENT_METHODS.UPI]: 'UPI',
  [PAYMENT_METHODS.QRIS]: 'QRIS',
  [PAYMENT_METHODS.WALLET]: 'Wallet',
};

// POS Modes
export const POS_MODES = {
  ORDER: 'ORDER',
  PAYMENT: 'PAYMENT',
  KITCHEN: 'KITCHEN',
};

// Sidebar Navigation
export const SIDEBAR_ITEMS = [
  { id: 'home', icon: 'pi-home', label: 'Home' },
  { id: 'orders', icon: 'pi-list', label: 'Orders' },
  { id: 'menu', icon: 'pi-book', label: 'Menu' },
  { id: 'reports', icon: 'pi-chart-bar', label: 'Reports' },
  { id: 'settings', icon: 'pi-cog', label: 'Settings' },
];
