import { memo } from "react";
import styles from './styles.module.scss';

const Button = (props:any) => {

  const {title, leftIcon, onClick} = props;

  return (
    <button 
      className={styles.button} 
      onClick={onClick}
    >
      {leftIcon && <img src={leftIcon}/>}
      {title}
    </button>
  )
}

export default memo(Button);