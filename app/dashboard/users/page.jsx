import React from "react";
import Styles from "@/app/ui/dashboard/users/user.module.css";
import Search from "@/app/ui/dashboard/search/search";

function page() {
  return (
    <div className={Styles.container}>
      <div className={Styles.container}>
        <Search placeholder="Search for a user.." />
      </div>
      ;
    </div>
  );
}

export default page;
