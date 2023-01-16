import { memo, useState } from "react"
import styles from "./styles.module.scss";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Button from "../../../../../../components/Button";

const categories = [
  {id: 1, name: "House Plants", count: 33},
  {id: 2, name: "House Plants", count: 12},
  {id: 3, name: "House Plants", count: 65},
  {id: 4, name: "House Plants", count: 39},
  {id: 5, name: "House Plants", count: 23},
  {id: 6, name: "House Plants", count: 17},
  {id: 7, name: "House Plants", count: 19},
  {id: 8, name: "House Plants", count: 13},
  {id: 9, name: "House Plants", count: 18}
]

const sizes = [
  {id: 1, name: "Small", count: 33},
  {id: 2, name: "Medium", count: 12},
  {id: 3, name: "Large", count: 65}
]

const PrettoSlider = styled(Slider)({
  color: "#46a358",
});

const FilterBar = () => {
  const [value, setValue] = useState<number[]>([0, 1200]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  
  function valuetext(value: number) {
    console.log(value)
    return `${value}°C`;
  }
  return (
    <div className={styles.filter_container}>
          <div className={styles.categories_block}>
            <h3>Categories</h3>
            <div>
              {categories.map((category) => 
                <div key={category.id}>
                  <span>{category.name}</span> 
                  <span>({category.count})</span>
                </div>
              )}
            </div>
          </div>

          <div className={styles.price_range_block}>
            <h3>Price Range</h3>
            <div>
              <PrettoSlider
                value={value}
                onChange={handleChange}
                min={0}
                max={1200}
              />
              <p>Price: ${value[0]} - ${value[1]}</p>
              <Button title="Filter" />
            </div>
          </div>

          <div className={styles.sizes_block}>
            <h3>Size</h3>
            <div>
              {sizes.map((size) => 
                <div key={size.id}>
                  <span>{size.name}</span> 
                  <span>({size.count})</span>
                </div>
              )}
            </div>
          </div>
        </div>
  )
}

export default memo(FilterBar);