import React from "react";
import Item from "../Item";
import styles from "./Items.module.scss";


export default function Items(props) {
    return (
        <main>
            {props.allItems.map(el => (   //map - функция 
                <Item key={el.id} item={el} />
            ))}
        </main>
    );
}