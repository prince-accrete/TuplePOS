import { usePosStore } from '../../store/pos.store';
import { CATEGORIES, PRODUCTS } from '../../services/dummyData';
import styles from './CategoryBar.module.css';

const CategoryBar = () => {
  const { selectedCategoryId, setSelectedCategory } = usePosStore();

  // Calculate item count for each category
  const getCategoryCount = (categoryId) => {
    if (categoryId === null) {
      return PRODUCTS.length;
    }
    return PRODUCTS.filter((p) => p.categoryId === categoryId).length;
  };

  const allMenuCount = PRODUCTS.length;

  return (
    <div className={styles.categoryBar}>
      {/* All Menu Button */}
      <button
        className={`${styles.categoryItem} ${selectedCategoryId === null ? styles.active : ''}`}
        onClick={() => setSelectedCategory(null)}
      >
        <div className={styles.iconWrapper} style={{ backgroundColor: '#e8edff' }}>
          <i className="pi pi-th-large" style={{ color: '#5B7FFF' }}></i>
        </div>
        <div className={styles.info}>
          <span className={styles.name}>All Menu</span>
          <span className={styles.count}>{allMenuCount} Items</span>
        </div>
      </button>

      {/* Category Buttons */}
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          className={`${styles.categoryItem} ${selectedCategoryId === category.id ? styles.active : ''}`}
          onClick={() => setSelectedCategory(category.id)}
        >
          <div
            className={styles.iconWrapper}
            style={{ backgroundColor: `${category.color}15` }}
          >
            <i
              className={`pi ${category.icon}`}
              style={{ color: category.color }}
            ></i>
          </div>
          <div className={styles.info}>
            <span className={styles.name}>{category.name}</span>
            <span className={styles.count}>{getCategoryCount(category.id)} Items</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
