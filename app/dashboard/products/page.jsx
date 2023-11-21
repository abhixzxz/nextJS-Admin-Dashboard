import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

function Products() {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Search placeholder="Search for a Products.." />
        <Link href="/dashboard/products/add">
          <button className={Styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <div className={Styles.product}>
                <Image
                  src={"/noproduct.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className={Styles.productImage}
                />
                Samsung s22 ultra
              </div>
            </td>
            <td>
              The most impressive portrait mode photos I’ve seen from a
              smartphone yet.
            </td>
            <td>80,000</td>
            <td>10-10-2023</td>
            <td>active</td>
            <td>
              <div className={Styles.buttons}>
                <Link href={`/`}>
                  <button className={`${Styles.button} ${Styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${Styles.button} ${Styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default Products;
