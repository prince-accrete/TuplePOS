# POS System - Developer Guide

A comprehensive guide for developers working on the Tuple POS System built with React 19, Vite, and Zustand.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Architecture & Patterns](#architecture--patterns)
6. [Styling Guide](#styling-guide)
7. [State Management](#state-management)
8. [Component Development](#component-development)
9. [Adding New Features](#adding-new-features)
10. [Best Practices](#best-practices)

---

## Project Overview

This is a modern Point of Sale (POS) system designed for restaurants and retail. The application features:

- Product catalog with category filtering
- Shopping cart functionality
- Order management
- Real-time calculations (tax, discounts, totals)
- Responsive grid layout

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Framework |
| Vite | 7.2.4 | Build Tool & Dev Server |
| Zustand | 5.0.9 | State Management |
| PrimeReact | 10.9.7 | UI Component Library |
| PrimeIcons | 7.0.0 | Icon Library |

---

## Project Structure

```
pos-system/
├── src/
│   ├── app/                    # App entry point
│   │   └── App.jsx             # Main app component with routing
│   │
│   ├── auth/                   # Authentication module
│   │   ├── LoginScreen.jsx     # Login page
│   │   └── LoginScreen.module.css
│   │
│   ├── config/                 # Configuration files
│   │   └── env.js              # Environment variables (TAX_RATE, CURRENCY)
│   │
│   ├── pos/                    # Main POS module
│   │   ├── index.jsx           # POS screen layout
│   │   ├── components/         # POS-specific components
│   │   │   ├── cart/           # Cart panel components
│   │   │   │   ├── CartPanel.jsx
│   │   │   │   ├── CartItem.jsx
│   │   │   │   └── BillSummary.jsx
│   │   │   ├── category/       # Category bar components
│   │   │   ├── header/         # Header components
│   │   │   ├── orderstrip/     # Bottom order strip
│   │   │   ├── product/        # Product grid & cards
│   │   │   ├── search/         # Search bar
│   │   │   └── sidebar/        # Sidebar navigation
│   │   │
│   │   ├── services/           # Data services
│   │   │   └── dummyData.js    # Mock data (products, categories, tables)
│   │   │
│   │   ├── store/              # Zustand stores
│   │   │   ├── cart.store.js   # Cart state management
│   │   │   └── pos.store.js    # POS UI state management
│   │   │
│   │   └── utils/              # Utility functions
│   │       ├── calculations.js  # Price calculations
│   │       └── constants.js     # App constants
│   │
│   ├── shared/                 # Shared utilities
│   │   └── primereact/         # PrimeReact configuration
│   │
│   ├── styles/                 # Global styles
│   │   ├── variables.css       # CSS variables (colors, spacing, etc.)
│   │   ├── reset.css           # CSS reset
│   │   ├── layout.css          # Grid layout definitions
│   │   ├── animations.css      # Animation utilities
│   │   └── primereact-overrides.css  # PrimeReact customizations
│   │
│   └── main.jsx                # Application entry point
│
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd pos-system

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Default Login
For development, any credentials will work on the login screen.

---

## Architecture & Patterns

### Layout System

The POS screen uses CSS Grid for its layout. The grid is defined in `src/styles/layout.css`:

```css
.pos-layout {
  display: grid;
  grid-template-rows: var(--header-height) var(--category-bar-height) auto 1fr var(--orderstrip-height);
  grid-template-columns: 1fr var(--cart-width);
  height: 100vh;
}
```

**Grid Areas:**
- Row 1: Header (left column only)
- Row 2: Category Bar (left) + Cart Panel starts (right)
- Row 3: Search Bar (left) + Cart Panel continues (right)
- Row 4: Product Grid (left) + Cart Panel continues (right)
- Row 5: Order Strip (left) + Cart Panel ends (right)
- Cart Panel spans rows 1-5 on the right column

### Component Pattern

Each component follows this structure:
```
ComponentName/
├── ComponentName.jsx         # Component logic
└── ComponentName.module.css  # Scoped styles (CSS Modules)
```

**Example Component:**
```jsx
import styles from './MyComponent.module.css';

const MyComponent = ({ prop1, prop2 }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{prop1}</h1>
    </div>
  );
};

export default MyComponent;
```

---

## Styling Guide

### CSS Variables

All design tokens are defined in `src/styles/variables.css`:

```css
:root {
  /* Colors */
  --pos-primary: #5B7FFF;        /* Primary blue */
  --pos-accent: #22c55e;         /* Success green */
  --pos-danger: #ef4444;         /* Error red */

  /* Text */
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 20px;
  --spacing-2xl: 24px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.08);

  /* Layout */
  --cart-width: 480px;
  --header-height: 80px;
}
```

### Using CSS Modules

```jsx
// Import module styles
import styles from './Component.module.css';

// Use in JSX
<div className={styles.container}>
  <span className={styles.active}>Active</span>
</div>

// Conditional classes
<div className={`${styles.item} ${isActive ? styles.active : ''}`}>
```

### Overriding PrimeReact

PrimeReact styles are customized in `src/styles/primereact-overrides.css`:

```css
/* Example: Customize dropdown */
.p-dropdown {
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

/* Scope to specific area */
.pos-cart-panel .p-dropdown {
  height: 32px;
  background-color: var(--bg-muted);
}
```

---

## State Management

### Zustand Stores

The app uses two Zustand stores:

#### 1. Cart Store (`cart.store.js`)

Manages shopping cart state:

```javascript
import { useCartStore } from '../store/cart.store';

// In component
const { items, addItem, removeItem, getSubtotal } = useCartStore();

// Available actions:
// - addItem(product)       Add product to cart
// - removeItem(productId)  Remove item from cart
// - updateQuantity(id, qty) Update item quantity
// - incrementQuantity(id)  Increase quantity by 1
// - decrementQuantity(id)  Decrease quantity by 1
// - clearCart()            Clear all items
// - setDiscount(percent)   Apply discount

// Computed values (call as functions):
// - getSubtotal()          Get subtotal amount
// - getTax()               Get tax amount
// - getDiscount()          Get discount amount
// - getGrandTotal()        Get final total
// - getItemCount()         Get total items count
```

#### 2. POS Store (`pos.store.js`)

Manages UI state and order metadata:

```javascript
import { usePosStore } from '../store/pos.store';

// Available state:
// - orderType              'DINE_IN' | 'TAKEAWAY' | 'DELIVERY'
// - tableName              Selected table
// - selectedCategoryId     Current category filter
// - searchQuery            Search term

// Actions:
// - setOrderType(type)
// - setTableName(name)
// - setSelectedCategory(id)
// - setSearchQuery(query)
// - startNewOrder()
// - resetOrder()
```

---

## Component Development

### Creating a New Component

1. **Create component folder:**
```
src/pos/components/myfeature/
├── MyFeature.jsx
└── MyFeature.module.css
```

2. **Write the component:**
```jsx
import { useState } from 'react';
import styles from './MyFeature.module.css';

const MyFeature = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={styles.container}>
      {/* Component content */}
    </div>
  );
};

export default MyFeature;
```

3. **Write the styles:**
```css
.container {
  padding: var(--spacing-lg);
  background-color: var(--pos-white);
  border-radius: var(--radius-md);
}

.title {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}
```

### Using PrimeReact Components

```jsx
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

// Button
<Button label="Submit" icon="pi pi-check" onClick={handleClick} />

// Input
<InputText value={text} onChange={(e) => setText(e.target.value)} />

// Dropdown
<Dropdown
  value={selected}
  options={options}
  onChange={(e) => setSelected(e.value)}
  placeholder="Select..."
/>
```

### Using PrimeIcons

```jsx
// In JSX
<i className="pi pi-search"></i>
<i className="pi pi-shopping-cart"></i>
<i className="pi pi-check"></i>
<i className="pi pi-times"></i>
<i className="pi pi-trash"></i>

// Common icons:
// pi-search, pi-plus, pi-minus, pi-check, pi-times
// pi-shopping-cart, pi-trash, pi-pencil, pi-user
// pi-calendar, pi-clock, pi-bars, pi-power-off
```

---

## Adding New Features

### Adding a New Product Category

1. **Update `dummyData.js`:**
```javascript
export const CATEGORIES = [
  // ... existing categories
  { id: 8, name: 'Soups', icon: 'pi-cloud', color: '#f97316' }
];
```

2. **Add products for the category:**
```javascript
export const PRODUCTS = [
  // ... existing products
  { id: 701, name: 'Tomato Soup', price: 120, categoryId: 8, image: null, inStock: true, isVeg: true }
];
```

### Adding a New Store Action

1. **Add to store:**
```javascript
// In cart.store.js
export const useCartStore = create((set, get) => ({
  // ... existing state

  myNewAction: (param) => {
    set(state => ({
      // Update state
    }));
  }
}));
```

2. **Use in component:**
```javascript
const { myNewAction } = useCartStore();
myNewAction(value);
```

### Adding New Configuration

Update `src/config/env.js`:

```javascript
export const ENV = {
  APP_NAME: 'POS System',
  VERSION: '1.0.0',
  TAX_RATE: 0.18,        // 18% GST
  CURRENCY: '₹',
  CURRENCY_CODE: 'INR',
  // Add new config here
  MAX_CART_ITEMS: 50
};
```

---

## Best Practices

### Code Style

1. **Use functional components with hooks**
2. **Use CSS Modules for component styles**
3. **Use CSS variables for design tokens**
4. **Keep components small and focused**
5. **Use `memo()` for expensive components** (like CartItem)

### Performance

```jsx
import { memo, useMemo, useCallback } from 'react';

// Memoize component
const CartItem = memo(({ item }) => {
  // Component code
});

// Memoize expensive calculations
const total = useMemo(() => calculateTotal(items), [items]);

// Memoize callbacks
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

### File Naming

- Components: `PascalCase.jsx` (e.g., `CartPanel.jsx`)
- Styles: `PascalCase.module.css` (e.g., `CartPanel.module.css`)
- Stores: `kebab-case.store.js` (e.g., `cart.store.js`)
- Utilities: `kebab-case.js` (e.g., `calculations.js`)

### Importing

```javascript
// React/Libraries first
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';

// Stores
import { useCartStore } from '../../store/cart.store';

// Utils/Constants
import { formatCurrency } from '../../utils/calculations';
import { ORDER_TYPES } from '../../utils/constants';

// Components
import CartItem from './CartItem';

// Styles (last)
import styles from './CartPanel.module.css';
```

---

## Common Tasks

### Formatting Currency

```javascript
import { formatCurrency } from '../utils/calculations';

// Returns: "₹220.00"
const price = formatCurrency(220);
```

### Calculating Totals

```javascript
import {
  calculateSubtotal,
  calculateTax,
  calculateDiscount,
  calculateGrandTotal
} from '../utils/calculations';

const subtotal = calculateSubtotal(items);
const tax = calculateTax(subtotal);
const discount = calculateDiscount(subtotal, 10); // 10% discount
const total = calculateGrandTotal(subtotal, tax, discount);
```

### Constants

```javascript
import { ORDER_TYPES, ORDER_STATUS, PAYMENT_METHODS, POS_MODES } from '../utils/constants';

// Order Types
ORDER_TYPES.DINE_IN    // 'DINE_IN'
ORDER_TYPES.TAKEAWAY   // 'TAKEAWAY'
ORDER_TYPES.DELIVERY   // 'DELIVERY'

// Order Status
ORDER_STATUS.OPEN          // 'OPEN'
ORDER_STATUS.KOT_PRINTED   // 'KOT_PRINTED'
ORDER_STATUS.COMPLETED     // 'COMPLETED'
ORDER_STATUS.CANCELLED     // 'CANCELLED'
```

---

## Troubleshooting

### Common Issues

1. **Styles not applying:**
   - Check if using correct CSS module syntax: `styles.className`
   - Verify CSS variable names in `variables.css`

2. **State not updating:**
   - Ensure using Zustand actions, not direct mutation
   - Check if component is subscribed to correct store slice

3. **PrimeReact styles conflicting:**
   - Use more specific selectors in `primereact-overrides.css`
   - Use `!important` sparingly

### Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Contact & Support

For questions or issues, contact the development team.

---

*Last updated: January 2026*

//Issue to fix

Current Status: 6.5/10 - Needs Optimization
Issues That Would Cause Problems in Electron:
High Priority Issues:
CSS Transitions - Using transition: all everywhere causes jank/lag
BillSummary not memoized - Recalculates totals on every render
External images (Unsplash) - Won't work offline in Electron
No virtualization - Will lag with 100+ products
Medium Priority:
CartPanel recreates arrays every render
Store getters recalculate unnecessarily
Missing useCallback for event handlers
Will It Work Smoothly for Clients?
Currently: NO - It will work but may feel sluggish, especially:
When scrolling through many products
When adding/removing cart items rapidly
On lower-end hardware