import Loader from '@/app/ui/dashboard/loader';
import styles from './loading.module.css';
export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <Loader />
    </div>
  );
}
