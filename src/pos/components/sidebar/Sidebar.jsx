import styles from './Sidebar.module.css';

const Sidebar = ({ onLogout }) => {
  const menuItems = [
    { id: 'home', icon: 'pi-th-large', label: 'Menu', active: true },
    { id: 'orders', icon: 'pi-list', label: 'Orders', active: false },
    { id: 'history', icon: 'pi-clock', label: 'History', active: false },
    { id: 'reports', icon: 'pi-chart-bar', label: 'Reports', active: false },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <i className="pi pi-bars"></i>
        </div>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${item.active ? styles.active : ''}`}
            title={item.label}
          >
            <i className={`pi ${item.icon}`}></i>
          </button>
        ))}
      </nav>

      <div className={styles.bottom}>
        <button
          className={styles.navItem}
          onClick={onLogout}
          title="Logout"
        >
          <i className="pi pi-power-off"></i>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
