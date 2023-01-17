import { memo } from "react";
import Button from "../../../../components/Button";
import styles from "./styles.module.scss";
import Plant4 from "../../../../assets/images/plant4.png";
import Plant6 from "../../../../assets/images/plant6.png";

const FindMore = () => {

  const sort =(arr:number[])=>{
   for(let i=0;i<arr.length;i++){
  }
  }

  return (
    <div className={styles.container}>
      <div className={styles.box_block}>
        <img src={Plant4}/>
        <div>
          <div>
            <h2>SUMMER CACTUS & SUCCULENTS</h2>
          </div>
          <div>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
          </div>
          <div>
            <Button title="Find More"/>
          </div>
        </div>
      </div>

      <div className={styles.box_block}>
        <img src={Plant4}/>
        <div>
          <div>
            <h2>SUMMER CACTUS & SUCCULENTS</h2>
          </div>
          <div>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
          </div>
          <div>
            <Button title="Find More"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(FindMore);