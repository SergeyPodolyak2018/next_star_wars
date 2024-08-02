'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { LINKS } from '@/app/lib/const';
import styles from './nav-links.module.css';

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {LINKS.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              styles.linck,
              pathname === link.href && styles.active
            )}
          >
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
