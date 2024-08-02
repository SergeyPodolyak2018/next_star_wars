import Image from 'next/image';
import styles from '../pages.module.css';
import { fetchPeople, fetchPlanets } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/pagination';
import Card from '@/app/ui/dashboard/universalCard';
import { FIELDS, IMAGES } from '@/app/lib/const';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const result = await fetchPlanets(Number(searchParams?.page) || 1);

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <Pagination
          previous={result.previous_internal}
          next={result.next_internal}
        />
      </div>
      <div className={styles.content}>
        {result.results.map((data) => (
          <Card
            key={data.id}
            data={data}
            fields={FIELDS.planets}
            imagePath={IMAGES.planets}
          />
        ))}
      </div>
    </div>
  );
}
