import { create } from 'zustand';
import { ENV } from '../../config/env';

export const useCartStore = create((set, get) => ({
  // State
  items: [],
  discountPercent: 0,
  promoCode: '',
  promoApplied: false,

  // Actions
  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1, note: '' }],
      };
    });
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  incrementQuantity: (productId) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
  },

  decrementQuantity: (productId) => {
    const item = get().items.find((i) => i.id === productId);
    if (item && item.quantity <= 1) {
      get().removeItem(productId);
      return;
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }));
  },

  updateItemNote: (productId, note) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, note } : item
      ),
    }));
  },

  setDiscount: (percent) => {
    set({ discountPercent: Math.min(100, Math.max(0, percent)) });
  },

  applyPromoCode: (code) => {
    // Simple promo code logic - can be expanded
    const validCodes = {
      'SAVE10': 10,
      'SAVE20': 20,
      'WELCOME': 15,
    };

    const discount = validCodes[code.toUpperCase()];
    if (discount) {
      set({
        promoCode: code.toUpperCase(),
        discountPercent: discount,
        promoApplied: true
      });
      return true;
    }
    return false;
  },

  removePromoCode: () => {
    set({
      promoCode: '',
      discountPercent: 0,
      promoApplied: false
    });
  },

  clearCart: () => {
    set({
      items: [],
      discountPercent: 0,
      promoCode: '',
      promoApplied: false
    });
  },

  // Computed values (call as functions)
  getSubtotal: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getTax: () => {
    const subtotal = get().getSubtotal();
    return subtotal * ENV.TAX_RATE;
  },

  getDiscount: () => {
    const subtotal = get().getSubtotal();
    const { discountPercent } = get();
    return (subtotal * discountPercent) / 100;
  },

  getGrandTotal: () => {
    const subtotal = get().getSubtotal();
    const tax = get().getTax();
    const discount = get().getDiscount();
    return subtotal + tax - discount;
  },

  getItemCount: () => {
    const { items } = get();
    return items.reduce((count, item) => count + item.quantity, 0);
  },
}));
