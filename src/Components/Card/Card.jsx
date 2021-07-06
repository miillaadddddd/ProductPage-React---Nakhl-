import React from "react";
import product from "./1.jpg";
import "./Card.css";
import axios from 'axios';
const api=axios.create({
  baseURL:`https://jsonplaceholder.typicode.com/posts`

})
export const Card = () => {

  axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>console.log(`response`, response))
  const data = [
    {
      name: "گل محمدی'",
      shens: "9985",
      mojadi: "20",
      price: "200000",
      eye: "1000",
      basket: "58",
      star: "4.2",
    },
    {
      name: "گیلاس",
      shens: "458",
      mojadi: "11",
      price: "50000",
      eye: "28",
      basket: "45",
      star: "3",
    },
    {
      name: "پارچه",
      shens: "846",
      mojadi: "84",
      price: "50000",
      eye: "8555",
      basket: "11",
      star: "4.2",
    },
    {
      name: "لباس",
      shens: "44",
      mojadi: "20",
      price: "200000",
      eye: "1000",
      basket: "58",
      star: "4.2",
    },
    {
      name: "گل محمدی",
      shens: "15",
      mojadi: "20",
      price: "200000",
      eye: "1000",
      basket: "58",
      star: "4.2",
    },
    {
      name: "جوراب",
      shens: "9985",
      mojadi: "20",
      price: "200000",
      eye: "1000",
      basket: "58",
      star: "4.2",
    },
    {
      name: "milad",
      shens: "9985",
      mojadi: "20",
      price: "200000",
      eye: "1000",
      basket: "58",
      star: "4.2",
    },
    {
      name: "milad",
      shens: "9985",
      mojadi: "20",
      price: "200000",
      eye: "1000",
      basket: "58",
      star: "4.2",
    },
  ];
  return (
    <>
    {data.map((a)=>(
        <>
         <div className="container-fluid py-2 mx-auto">
        <div className="card py-4 px-4">
           
          <div className="row justify-content-start px-3">
            <div className="image-bg mr-3">
              <img className="user-img fit-image" src={product} />
            </div>
            <div className="text-left">
              <h2></h2>
              <h6>{a.name}</h6>
            </div>
            <div className="btn btn-pink ml-auto">
              <i className="fas fa-ellipsis-v"></i>
            </div>
          </div>
          <div className="line-one">
            <span className="">شناسه :{a.shens}</span>
            <span className="">موجودی: {a.mojadi}</span>
            <span className="line-one-last-section">قیمت :{a.price} تومان</span>
          </div>

          <div className="line-two">
            <span className="">
              <i class="far fa-eye"></i>
              5200
            </span>
            <span className="">
              <i className="fas fa-shopping-basket"></i>
              50
            </span>
            <span className="">
              <i className="far fa-star"></i>
              {a.star}(22 نظر)
            </span>
            <button className="btn btn-success set-place-btn">ویرایش</button>
          </div>
        </div>
      </div>
        </>
    ))}
     
    </>
  );
};
