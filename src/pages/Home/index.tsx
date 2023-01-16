import { memo } from "react";

import styles from "./styles.module.scss";

import Slider from "./components/Slider";
import Products from "./components/Products";
import FindMore from "./components/FindMore";

const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
      <FindMore />
    </div>
  )
}

export default memo(Home);