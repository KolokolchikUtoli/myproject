import React from "react";
import styles from "./Orders.module.scss";
import { MdAutoDelete } from "react-icons/md"; //добавление иконка корзины

export default function Orders(props){
    return(
        <div className={styles.item}>
            <img src={"./images/"+props.item.img}/>  {/* путь до папки*/}
            <h2>{props.item.title}</h2>
            <b>{props.item.price} ₽</b>
            <MdAutoDelete className={styles.deleteIcon} onClick={()=>props.onDelete(props.item.id)} /> 
        </div>
    );
}