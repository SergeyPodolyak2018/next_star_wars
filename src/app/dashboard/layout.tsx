// import SideNav from '@/app/ui/dashboard/sidenav';
import styles from './layout.module.css';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <NavLinks />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
