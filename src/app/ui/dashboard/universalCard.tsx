import styles from './universalCard.module.css';
import Image from 'next/image';

export default function Card<T extends { [key: string]: any }>(props: {
  data: T;
  fields: string[];
  imagePath: string;
  children?: string | JSX.Element | JSX.Element[];
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={`${props.imagePath}${props.data.id}.jpg`}
          width={50}
          height={100}
          alt='Picture of the author'
        />
      </div>
      <div className={styles.fields}>
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
