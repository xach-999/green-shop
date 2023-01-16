import { memo } from "react"
import styles from "./styles.module.scss";
import Plant4 from "../../../../../../assets/images/plant4.png"
import Plant5 from "../../../../../../assets/images/plant5.jpg"
import Plant6 from "../../../../../../assets/images/plant6.png"
import Plant7 from "../../../../../../assets/images/plant7.jpg"
import Plant8 from "../../../../../../assets/images/plant8.png"
import Plant9 from "../../../../../../assets/images/plant9.png"
import Plant10 from "../../../../../../assets/images/plant10.png"
import Plant11 from "../../../../../../assets/images/plant11.png"
import Plant12 from "../../../../../../assets/images/plant12.png"

const plants = [
  {id: 1, name: "Barberton Daisy", image: Plant4, price: 199},
  {id: 2, name: "Angel Wing Begonia", image: Plant5, price: 169},
  {id: 3, name: "African Violet", image: Plant6, price: 199},
  {id: 4, name: "Beach Spider Lily", image: Plant7, price: 129},
  {id: 5, name: "Blushing Bromeliad", image: Plant8, price: 137},
  {id: 6, name: "Aluminum Plant", image: Plant9, price: 179},
  {id: 7, name: "Bird's Nest Fern", image: Plant10, price: 99},
  {id: 8, name: "Broadleaf Lady Palm", image: Plant11, price: 59},
  {id: 9, name: "Chinese Evergreen", image: Plant12, price: 39},
]

const Plants = () => {
  return (
    <div className={styles.plants_container}>
      <div className={styles.all_plants_header}>
        <div className={styles.plants_menu}>
          <span className={styles.active}>All Plants</span>
          <span>New Arrivals</span>
          <span>Sale</span>
        </div>
        <div>Short by:</div>
      </div>
      <div className={styles.all_plants_body}>
        {plants.map((plant) => 
          <div className={styles.plant_box}>
            <div>
              <img src={plant.image}/>
            </div>
            <h3>{plant.name}</h3>
            <span>${plant.price}.00</span>
          </div>
        )}
      </div>
      <div className={styles.pages_block}>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div> 
  )
}

export default memo(Plants);