import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        ) : (
          <div className={styles.noImage}>No image available</div>
        )}
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>{product.price} FCFA</p>
        <p className={styles.description}>
          {product.description?.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description}
        </p>
      </div>
    </div>
  );
}
