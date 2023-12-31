import React from "react";
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>1000</span>
        <span className={styles.number}>12000.2</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> than previous week
        </span>
      </div>
    </div>
  );
}

export default Card;
