import styles from '../pages.module.css';
import { fetchPeople } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/pagination';
import Card from '@/app/ui/dashboard/universalCard';
import { FIELDS, IMAGES, LINK_TO_UNIT } from '@/app/lib/const';
import Link from 'next/link';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const result = await fetchPeople(Number(searchParams?.page) || 1);

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
            fields={FIELDS.people}
            imagePath={IMAGES.people}
          >
            <Link
              href={`${LINK_TO_UNIT.people}${data.id}`}
              className={styles.linkContainer}
            >
              Info
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
