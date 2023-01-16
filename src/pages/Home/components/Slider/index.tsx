import { memo } from "react"
import styles from "./styles.module.scss";
import Plant1 from "../../../../assets/images/plant1.png";
import Plant2 from "../../../../assets/images/plant2.png";
import Plant3 from "../../../../assets/images/plant3.png";

import Button from "../../../../components/Button";

const Slider = () => {

  const sliders = [
    {
      id: 1,
      image: Plant1
    },
    // {
    //   id: 2,
    //   image: Plant1
    // },
    // {
    //   id: 3,
    //   image: Plant1
    // },
  ]

  return (
    <div className={styles.slider_container}>
      {sliders.map((item, i) => 
        <div className={styles.container} key={item.id}>
          <div className={styles.welcomeGreenShop}>
            <h3>Welcome to GreenShop {i + 1}</h3>
            <div>
              <p>Let's Make a Better <span>Planet</span></p>
            </div>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
            <Button title="Shop Now" />
          </div>
          <div className={styles.plant1}>
            <img src={item.image}/>
            <img src={item.image}/>
          </div>
        </div>
      )}

      <div className={styles.slider_switch}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> 
  )
}

export default memo(Slider);