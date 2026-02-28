# POS System - Restaurant Point of Sale

A high-performance, production-grade Restaurant POS system built with React, PrimeReact, and Zustand.

## Features

- **Fast & Touch-Friendly UI** - Optimized for restaurant operations
- **Category-Based Product Navigation** - Quick access to menu items
- **Real-Time Cart Management** - Instant updates with calculations
- **Order Types Support** - Dine-in, Takeaway, and Delivery
- **Bill Summary** - Automatic tax and discount calculations
- **Modern UI** - Clean design with PrimeReact components

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **PrimeReact** - UI component library
- **Zustand** - State management
- **CSS Modules** - Scoped styling

## Project Structure

```
src/
├── app/                    # Main app wrapper
│   └── App.jsx
├── pos/                    # POS domain
│   ├── components/
│   │   ├── header/        # Top header with order info
│   │   ├── category/      # Category sidebar
│   │   ├── product/       # Product grid & cards
│   │   └── cart/          # Cart panel & bill summary
│   ├── store/             # Zustand stores
│   │   ├── cart.store.js  # Cart state & calculations
│   │   ├── pos.store.js   # POS metadata
│   │   └── ui.store.js    # UI state (dialogs, etc.)
│   ├── services/
│   │   └── dummyData.js   # Sample products & categories
│   ├── utils/
│   │   ├── calculations.js # Price calculations
│   │   └── constants.js    # App constants
│   └── index.jsx          # Main POS screen
├── shared/                # Shared utilities
│   └── primereact/
│       └── config.js
├── styles/                # Global styles
│   ├── variables.css      # CSS variables
│   ├── reset.css          # CSS reset
│   ├── layout.css         # POS layout
│   └── primereact-overrides.css
└── config/
    └── env.js             # Environment config
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+

### Installation

```bash
cd pos-system
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## How It Works

### State Management

The app uses **Zustand** for state management with three separate stores:

1. **Cart Store** (`cart.store.js`)
   - Manages cart items
   - Handles quantity updates
   - Calculates subtotal, tax, discount, grand total

2. **POS Store** (`pos.store.js`)
   - Order metadata (type, table, customer)
   - Selected category
   - Search query

3. **UI Store** (`ui.store.js`)
   - Dialog visibility
   - Toast notifications

### Performance Optimizations

- **React.memo** on ProductCard and CartItem components
- No unnecessary re-renders during cart updates
- Separate stores to prevent cross-component updates
- CSS Modules for zero-runtime styling overhead

### Layout Strategy

The POS uses a **fixed grid layout** (no routing during billing):

```
┌─────────────────────────────────────────────┐
│ Header (Date | Order Type | Table Name)    │
├──────────┬───────────────────┬─────────────┤
│ Category │ Product Grid      │ Cart Panel  │
│ Sidebar  │ (Search + Cards)  │             │
├──────────┴───────────────────┴─────────────┤
│ Open Orders Strip (Future)                 │
└─────────────────────────────────────────────┘
```

## Dummy Data

The app comes with pre-loaded restaurant menu items:

- **Starters** - Paneer Tikka, Chicken Tikka, etc.
- **Main Course** - Butter Chicken, Paneer Butter Masala, etc.
- **Breads** - Naan, Roti, Paratha
- **Rice** - Biryani, Jeera Rice
- **Beverages** - Chai, Coffee, Lassi
- **Desserts** - Gulab Jamun, Ice Cream

You can modify the data in `src/pos/services/dummyData.js`

## Key Components

### ProductCard
- Displays product with image, name, category, price
- Veg/Non-veg indicator
- Add to cart button
- Out of stock handling

### CartPanel
- Shows all cart items
- Quantity controls (+/-)
- Bill summary with tax & discount
- Place order button
- Clear cart option

### CategorySidebar
- Filterable categories
- Item count per category
- Active state highlighting

## Configuration

### Tax Rate
Edit `src/config/env.js` to change the tax rate:

```javascript
export const ENV = {
  TAX_RATE: 0.18, // 18% GST
  CURRENCY: '₹',
  // ...
};
```

### Theme Colors
Edit CSS variables in `src/styles/variables.css`:

```css
:root {
  --pos-primary: #2f6fed;
  --pos-accent: #22c55e;
  --pos-danger: #ef4444;
  /* ... */
}
```

## Future Enhancements

- [ ] Backend integration (Node.js API)
- [ ] KOT (Kitchen Order Ticket) printing
- [ ] Bill printing
- [ ] Order history
- [ ] Payment methods integration
- [ ] Table management
- [ ] Open orders strip
- [ ] Barcode scanner support
- [ ] Electron packaging for desktop EXE

## Development Notes

This POS follows the **Development Blueprint** principles:

1. **Speed-first** - No heavy animations or unnecessary re-renders
2. **State over routing** - Screen switches via state, not URL
3. **Touch-friendly** - Large tap targets, clear visual feedback
4. **Production-ready structure** - Scalable folder organization

## License

MIT

---

Built with ❤️ for restaurant operations
