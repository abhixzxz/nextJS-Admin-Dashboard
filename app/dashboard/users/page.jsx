import React from "react";
import Styles from "@/app/ui/dashboard/users/user.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

function page() {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Search placeholder="Search for a user.." />
        <Link href="/dashboard/users/add">
          <button className={Styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <div className={Styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className={Styles.userImage}
                />
                Abhihh
              </div>
            </td>
            <td>abhi@gmain.com</td>
            <td>Abhiiihhhhh</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={Styles.buttons}>
                <Link href={`/dashboard/users/10`}>
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

export default page;
