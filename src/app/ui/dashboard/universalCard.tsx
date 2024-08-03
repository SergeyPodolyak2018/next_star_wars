'use client';
import React from 'react';
import styles from './universalCard.module.css';
import Image from 'next/image';

export default function Card<T extends { [key: string]: any }>(props: {
  data: T;
  fields: string[];
  imagePath: string;
  children?: string | JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}) {
  const [src, setSrc] = React.useState(
    `${props.imagePath}${props.data.id}.jpg`
  );

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          width={50}
          height={100}
          blurDataURL='/placeholder.jpg'
          placeholder='blur'
          alt='Picture of the author'
          onError={() => setSrc('/placeholder.jpg')}
        />
      </div>
      <div
        className={styles.fields}
        style={props.style}
      >
        {props.fields.map((el, index) => {
          if (props.data && typeof props.data === 'object') {
            if (props.data.hasOwnProperty(el)) {
              return (
                <div
                  key={index}
                  className={styles.fieldContainer}
                >
                  <span className={styles.fieldName}>{el}</span>
                  <span className={styles.fieldValue}>{props.data[el]}</span>
                </div>
              );
            }
          }
        })}
        {props.children}
      </div>
    </div>
  );
}
