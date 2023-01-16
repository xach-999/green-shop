import { memo } from "react"
import styles from "./styles.module.scss";
import Plant from "../../../../../../assets/images/plant8.png"

const SuperSale = () => {
  return (
    <div className={styles.super_sale}>
      <h2>Super Sale</h2>
      <h3>UP TO 75% OFF</h3>
      <img src={Plant}/>
    </div> 
  )
}

export default memo(SuperSale);