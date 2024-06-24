import React from "react";
import styles from "./Categories.module.scss";

export default function Categories(props) {

    const categories = [
        {
            key: "all",
            name: "Все"
        },
        {
            key: "Пирожок",
            name: "Пирожок"
        },
        {
            key: "Торт",
            name: "Торт"
        },
        {
            key: "Пирожное",
            name: "Пирожное"
        },
        {
            key: "Пирог",
            name: "Пирог"
        }
    ];


    return (
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}