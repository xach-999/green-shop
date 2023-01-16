import { memo } from "react";
import { Outlet, NavLink } from "react-router-dom";

import GreenShopLogo from "../../assets/images/greenshop-logo.png";
import SearchIcon from "../../assets/images/search-icon.png";
import CardIcon from "../../assets/images/card-icon.png";
import LoginIcon from "../../assets/images/login-icon.png";

import styles from "./styles.module.scss";
import Button from "../Button";

const Navigation = () => {

  const navClassName = (({isActive}:any) => {
    return isActive ? styles.activeLink : undefined
  })

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.navigate}>
          <div className={styles.logo_block}>
            <img src={GreenShopLogo} />
            <div>GREENSHOP</div>
          </div>
          <div className={styles.menu_block}>
            <NavLink className={navClassName} style={{color: "#3D3D3D"}} to="">Home</NavLink>
            <NavLink className={navClassName} to="shop">Shop</NavLink>
            <NavLink className={navClassName} to="plant-care">Plant Care</NavLink>
            <NavLink className={navClassName} to="blogs">Blogs</NavLink>
          </div>
          <div className={styles.rightBlock}>
            <img src={SearchIcon}/>
            <div>
              <img src={CardIcon}/>
            </div>
            <Button 
              title="Login"
              leftIcon={LoginIcon}
            />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Navigation);
