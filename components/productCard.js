import React from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product?.image || product.image_url} alt={product.title} />
      </div>
      <div className={styles.info}>
        <h2>{product?.title}</h2>
        <p>{product?.price} FCFA</p>
        <p>
          {product.description?.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description}
        </p>
      </div>
    </div>
  );
}
