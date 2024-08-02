'use client';

import styles from './pagination.module.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Pagination(props: { previous: number; next: number }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set('page', String(page));
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <button
        className={`${styles.button} ${
          props.previous < 1 ? styles.disabeled : ''
        }`}
        onClick={() => {
          handleChangePage(props.previous);
        }}
        disabled={props.previous < 1}
      >
        Previous
      </button>

      <button
        className={`${styles.button} ${props.next < 1 ? styles.disabeled : ''}`}
        onClick={() => {
          handleChangePage(props.next);
        }}
        disabled={props.next < 1}
      >
        Next
      </button>
    </>
  );
}
