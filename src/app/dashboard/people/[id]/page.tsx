import React from 'react';
import { fetchPersonById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import styles from './page.module.css';
import FlowChart from '@/app/ui/dashboard/flow/flowchart';

export const metadata: Metadata = {
  title: 'Person data agregation',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await fetchPersonById(id);

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <FlowChart data={data} />
    </div>
  );
}
