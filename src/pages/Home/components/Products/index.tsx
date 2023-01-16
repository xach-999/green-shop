import { memo, useState } from "react";
import styles from "./styles.module.scss";


import FilterBar from "./components/FilterBar";
import SuperSale from "./components/SuperSale";
import Plants from "./components/Plants";

const Products = () => {

  return (
    <div className={styles.container}>
      <div className={styles.left_bar}>
        <FilterBar />
        <SuperSale />
      </div>
      <Plants />
    </div>
  )
}

export default memo(Products);