import React,{useState} from "react";
import styles from "./Header.module.scss";
import { SiZebratechnologies } from "react-icons/si";
import { SlBasket } from "react-icons/sl";

export default function Header() {
    let [cartOpen,setCartOpen] = useState(false);
    return (
        <header>
            <div>
                <SiZebratechnologies className={styles.icon}/>
                <span className={styles.logo}>Кафе- Бистро "Зебра"</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <SlBasket onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ""}`}/>
            </div>

            {cartOpen&&(
                <div className={styles.shopCart}>

                </div>
            )}
            <div className={styles.presentation}></div>
        </header>
    );
}