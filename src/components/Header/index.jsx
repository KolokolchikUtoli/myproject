import React, { useState } from "react";
import styles from "./Header.module.scss";
import { SiZebratechnologies } from "react-icons/si";
import { SlBasket } from "react-icons/sl";
import Orders from "../Orders";
import PriceListPDF from "../PriceListPDF";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    const handleDownloadPDF = async () => {
        const pdfBlob = await pdf(<PriceListPDF items={props.items} />).toBlob();
        saveAs(pdfBlob, "PriceList.pdf");

    }

    const showOrders = (props) => {
        let summa = 0;

        props.orders.forEach(el => summa += Number.parseFloat(el.price))
        return (
            <>
                {props.orders.map(el => (
                    <Orders key={el.id} item={el} onDelete={props.onDelete} />
                ))}

                <p className={styles.summa}>Итого: {new Intl.NumberFormat().format(summa)} ₽</p>
            </>
        )
    }

    const showNothing = () => {
        return (
            <div className={styles.empty}>
                <h2> Товары отсутствуют в корзине</h2>
            </div>
        )
    }


    return (
        <header>
            <div>
                <SiZebratechnologies className={styles.icon} />
                <span className={styles.logo}>Кафе- Бистро "Зебра"</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li onClick={handleDownloadPDF}>Скачать прайс-лист</li>
                </ul>
                <SlBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ""}`} />
            </div>

            {cartOpen && (
                <div className={styles.shopCart}>
                    {props.orders.length > 0 ? showOrders(props) : showNothing()}
                </div>
            )}
            <div className={styles.presentation}></div>
        </header>
    );
}