import { useMemo } from 'react';
import { usePosStore } from '../../store/pos.store';
import { PRODUCTS } from '../../services/dummyData';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const ProductGrid = () => {
  const { selectedCategoryId, searchQuery } = usePosStore();

  const filteredProducts = useMemo(() => {
    let products = PRODUCTS;

    // Filter by category
    if (selectedCategoryId !== null) {
      products = products.filter((p) => p.categoryId === selectedCategoryId);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    return products;
  }, [selectedCategoryId, searchQuery]);

  if (filteredProducts.length === 0) {
    return (
      <div className={styles.empty}>
        <i className="pi pi-search"></i>
        <p>No products found</p>
        <span>Try adjusting your search or category filter</span>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
