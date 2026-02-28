import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import CategoryBar from './components/category/CategoryBar';
import SearchBar from './components/search/SearchBar';
import ProductGrid from './components/product/ProductGrid';
import CartPanel from './components/cart/CartPanel';
import OrderStrip from './components/orderstrip/OrderStrip';

const POSScreen = ({ onLogout }) => {
  return (
    <div className="pos-layout">
      {/* Sidebar - Left column, spans all rows */}
      <div className="pos-sidebar">
        <Sidebar onLogout={onLogout} />
      </div>

      {/* Header - Middle column, row 1 */}
      <div className="pos-header">
        <Header />
      </div>

      {/* Category Bar - Middle column, row 2 */}
      <div className="pos-category-bar">
        <CategoryBar />
      </div>

      {/* Search Bar - Middle column, row 3 */}
      <div className="pos-search-bar">
        <SearchBar />
      </div>

      {/* Product Grid - Middle column, row 4 */}
      <div className="pos-product-grid">
        <ProductGrid />
      </div>

      {/* Order Strip - Middle column, row 5 */}
      <div className="pos-order-strip">
        <OrderStrip />
      </div>

      {/* Cart Panel - Right column, spans all rows */}
      <div className="pos-cart-panel">
        <CartPanel />
      </div>
    </div>
  );
};

export default POSScreen;
