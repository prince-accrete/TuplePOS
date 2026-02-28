import { create } from 'zustand';
import { ORDER_TYPES } from '../utils/constants';

export const usePosStore = create((set, get) => ({
  // Order metadata
  orderType: ORDER_TYPES.DINE_IN,
  tableName: '',
  customerName: '',
  orderNumber: generateOrderNumber(),

  // UI State
  selectedCategoryId: null, // null means "All Menu"
  searchQuery: '',

  // Current date/time
  currentDate: new Date(),

  // Actions
  setOrderType: (type) => {
    set({ orderType: type });
  },

  setTableName: (name) => {
    set({ tableName: name });
  },

  setCustomerName: (name) => {
    set({ customerName: name });
  },

  setSelectedCategory: (categoryId) => {
    set({ selectedCategoryId: categoryId });
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },

  startNewOrder: () => {
    set({
      orderType: ORDER_TYPES.DINE_IN,
      tableName: '',
      customerName: '',
      orderNumber: generateOrderNumber(),
      selectedCategoryId: null,
      searchQuery: '',
      currentDate: new Date(),
    });
  },

  resetOrder: () => {
    set({
      orderType: ORDER_TYPES.DINE_IN,
      tableName: '',
      customerName: '',
      orderNumber: generateOrderNumber(),
    });
  },

  updateDateTime: () => {
    set({ currentDate: new Date() });
  },
}));

// Helper to generate order numbers
function generateOrderNumber() {
  const num = Math.floor(Math.random() * 900) + 100;
  return `#${String(num).padStart(3, '0')}`;
}
