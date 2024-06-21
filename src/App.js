import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss";
import Items from "./components/Items";
import { SiMetrodeparis } from "react-icons/si";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Пирожок с мясом", //название 
      img: "пирожок с мясом.png",//картинка товара
      desc: "Вес 32 гр. Состав : говядина, лук, соль.", //описание товара
      category: "Пирожок", //категория товара
      price: "59 "  //цена
    },
    {
      id: 2,
      title: "Пирожок с печенью", //название 
      img: "пирожок с печенью.png",//картинка товара
      desc: "Вес 32 гр. Состав : печень говяжья, лук, соль.", //описание товара
      category: "Пирожок", //категория товара
      price: "55 ",  //цена
    },
    {
      id: 3,
      title: "Пирожок с капустой и рыбой", //название 
      img: "пирожок с капустой и рыбой.png",//картинка товара
      desc: "Вес 32 гр. Состав : рыба- сайра, капуста тушеная, соль.", //описание товара
      category: "Пирожок", //категория товара
      price: "55 ",  //цена
    },
    {
      id: 4,
      title: "Зимняя вишня", //название 
      img: "зимняя вишня.png",//картинка товара
      desc: "Вес 150 - 1560 гр. Состав : Слоеные коржи, ванильно-сливочный крем с вишней.", //описание товара
      category: "Торт", //категория товара
      price: "от 259 ",  //цена
    },
    {
      id: 5,
      title: "Зебра", //название 
      img: "зебра.png",//картинка товара
      desc: "Вес 150 - 1560 гр. Состав : Два бисквитных коржа, крем сливочный с вареной сгущенкой и грецкими орехами.", //описание товара
      category: "Торт", //категория товара
      price: "от 220 ",  //цена
    },
    {
      id: 6,
      title: "Шоколадно - банановый", //название 
      img: "шоколадно- банановый.png",//картинка товара
      desc: "Вес 150 - 1560 гр. Состав : Шоколадные коржи, шоколадный крем, прослойка свежего банана.", //описание товара
      category: "Торт", //категория товара
      price: "от 239 ",  //цена
    },
    {
      id: 7,
      title: "Трубочка с заварным кремом", //название 
      img: "трубочка с заварным кремом.png",//картинка товара
      desc: "Вес 18 гр. Состав : Тесто слоеное с заварным кремом.", //описание товара
      category: "Пирожное", //категория товара
      price: "49 ",  //цена
    },
    {
      id: 8,
      title: "Корзиночка Фила с ягодой", //название 
      img: "корзиночка Фила с ягодой.png",//картинка товара
      desc: "Вес 45 гр. Состав : Песочная корзинка, шоколад, йогуртовый крем, ассорти из свежих ягод (ассортимент ягод может меняться по сезону).", //описание товара
      category: "Пирожное", //категория товара
      price: "199 ",  //цена
    },
    {
      id: 9,
      title: "Звезда Давида", //название 
      img: "звезда Давида.png",//картинка товара
      desc: "Вес 75 гр. Состав : Миндальная корзинка, ягодный джем, масляный крем, тулипная лента (вафля)", //описание товара
      category: "Пирожное", //категория товара
      price: "220 ",  //цена
    },
    {
      id: 10,
      title: "Ягодно - творожный", //название 
      img: "ягодно-творожный.png",//картинка товара
      desc: "Вес 175 - 700 гр. Состав :  Песочная корзинка, обмазанная шоколадом, йогуртовый крем, ассорти из ягод.", //описание товара
      category: "Пирог", //категория товара
      price: "от 179 ",  //цена
    },
    {
      id: 11,
      title: "Грушевый пай", //название 
      img: "грушевый пай.png",//картинка товара
      desc: "Вес 155 - 620 гр. Состав : Песочное тесто, груша, сливочная заливка.", //описание товара
      category: "Пирог", //категория товара
      price: "от 179 ",  //цена
    },
    {
      id: 12,
      title: "Хрустикс", //название 
      img: "хрустикс.png",//картинка товара
      desc: "Вес 22 гр. Состав : Семечки, миндальные лепестки в карамельной заливке на горьком шоколаде.", //описание товара
      category: "Пирог", //категория товара
      price: "59 ",  //цена
    },
  ]);
  const[orders,setOrders] =useState([]);
  const addToOrder=(item) =>{
    setOrders([...orders,item]);
  }

  return (
    <div className="wrapper">
      <Header orders={orders}/>
      <Items allItems={items} onAdd={addToOrder}/>
      <Footer />
    </div>
  );
}

export default App;
