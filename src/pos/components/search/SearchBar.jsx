import { usePosStore } from '../../store/pos.store';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = usePosStore();

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchWrapper}>
        <i className="pi pi-search"></i>
        <input
          type="text"
          placeholder="Search something sweet on your mind..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.input}
        />
        {searchQuery && (
          <button
            className={styles.clearBtn}
            onClick={() => setSearchQuery('')}
          >
            <i className="pi pi-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
