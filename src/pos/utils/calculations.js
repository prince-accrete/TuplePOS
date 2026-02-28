import { ENV } from '../../config/env';

/**
 * Format a number as currency
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  return `${ENV.CURRENCY}${amount.toFixed(2)}`;
};

/**
 * Calculate subtotal from cart items
 * @param {Array} items - Array of cart items with price and quantity
 * @returns {number} Subtotal amount
 */
export const calculateSubtotal = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

/**
 * Calculate tax amount
 * @param {number} subtotal - Subtotal amount
 * @param {number} taxRate - Tax rate (default from ENV)
 * @returns {number} Tax amount
 */
export const calculateTax = (subtotal, taxRate = ENV.TAX_RATE) => {
  return subtotal * taxRate;
};

/**
 * Calculate discount amount
 * @param {number} subtotal - Subtotal amount
 * @param {number} discountPercent - Discount percentage
 * @returns {number} Discount amount
 */
export const calculateDiscount = (subtotal, discountPercent) => {
  return (subtotal * discountPercent) / 100;
};

/**
 * Calculate grand total
 * @param {number} subtotal - Subtotal amount
 * @param {number} tax - Tax amount
 * @param {number} discount - Discount amount
 * @returns {number} Grand total
 */
export const calculateGrandTotal = (subtotal, tax, discount = 0) => {
  return subtotal + tax - discount;
};

/**
 * Calculate total item count in cart
 * @param {Array} items - Array of cart items
 * @returns {number} Total quantity of items
 */
export const calculateItemCount = (items) => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

/**
 * Format date for display
 * @param {Date} date - Date object
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Format time for display
 * @param {Date} date - Date object
 * @returns {string} Formatted time string
 */
export const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

/**
 * Format tax rate as percentage
 * @param {number} rate - Tax rate as decimal
 * @returns {string} Formatted percentage string
 */
export const formatTaxRate = (rate = ENV.TAX_RATE) => {
  return `${(rate * 100).toFixed(0)}%`;
};
