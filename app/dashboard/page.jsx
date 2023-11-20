import React from "react";
import Card from "../ui/dashboard/card/card";
import Styles from "../ui/dashboard/dashbord.module.css";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Transations from "../ui/dashboard/transations/Transations";
import Charts from "../ui/dashboard/charts/charts";

function Dashboard() {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.main}>
        <div className={Styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transations />
        <Charts />
      </div>
      <div className={Styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;
