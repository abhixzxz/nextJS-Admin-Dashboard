import React from "react";
import styles from "./transations.module.css";
import Image from "next/image";

function Transations() {
  return (
    <div className={styles.container}>
      <h3>Latest Transations</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Date</td>
            <td>Status</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  width={40}
                  height={40}
                  src="/noavatar.png"
                  alt="user image"
                />
                Abhi
              </div>
            </td>
            <td>
              <span className={`${styles.done} ${styles.status}`}>Done</span>
            </td>
            <td>10-10-2003</td>
            <td>12000</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  width={40}
                  height={40}
                  src="/noavatar.png"
                  alt="user image"
                />
                Abhi
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>
                pending
              </span>
            </td>
            <td>10-10-2003</td>
            <td>12000</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  width={40}
                  height={40}
                  src="/noavatar.png"
                  alt="user image"
                />
                Abhi
              </div>
            </td>
            <td>
              <span className={`${styles.cancelled} ${styles.status}`}>
                cancled{" "}
              </span>
            </td>
            <td>10-10-2003</td>
            <td>12000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transations;
