import React from "react";
import { Container } from "@mui/material";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const products = [
  {
    id: 1,
    title: "Горный велосипед",
    image: "/softjet/public/content/1.png",
    description:
      "Высококачественный горный велосипед для внедорожных приключений.",
    price: "55000 ₽",
  },
  {
    id: 2,
    title: "Палатка",
    image: "/softjet/public/content/2.jpg",
    description:
      "Просторная палатка на 4 человека, устойчивая к любым погодным условиям.",
    price: "25000 ₽",
  },
  {
    id: 3,
    title: "Спальный мешок",
    image: "/softjet/public/content/3.png",
    description:
      "Теплый и легкий спальный мешок для комфортного сна на природе, с возможностью удобной компоновки",
    price: "8000 ₽",
  },
  {
    id: 4,
    title: "Кемпинговый рюкзак",
    image: "/softjet/public/content/4.png",
    description:
      "Прочный рюкзак с множеством карманов и отделений с клапанами для походов.",
    price: "10000 ₽",
  },
  {
    id: 5,
    title: "Кемпинговый стол",
    image: "/softjet/public/content/5.jpg",
    description:
      "Складной стол для кемпинга из алюминия, легкий и удобный в транспортировке.",
    price: "6000 ₽",
  },
  {
    id: 6,
    title: "Кемпинговый стул",
    image: "/softjet/public/content/6.jpg",
    description:
      "Удобный складной стул для отдыха на природе, с легкой транспортировкой",
    price: "2500 ₽",
  },
  {
    id: 7,
    title: "Кухонный набор",
    image: "/softjet/public/content/7.jpg",
    description:
      "Полный набор кухонных принадлежностей для приготовления еды в походе.",
    price: "1500 ₽",
  },
  {
    id: 8,
    title: "Фонарь",
    image: "/softjet/public/content/8.jpg",
    description:
      "Мощный фонарь с несколькими режимами освещения при активном отдыхе.",
    price: "2500 ₽",
  },
  {
    id: 9,
    title: "Набор для выживания",
    image: "/softjet/public/content/9.jpg",
    description:
      "Компактный набор для выживания с основными инструментами и принадлежностями.",
    price: "5000 ₽",
  },
];

const ProductList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container
      sx={{ padding: { xs: 0, sm: 2 }, maxWidth: { xs: "100%", sm: "80%" } }}
    >
      <Slider {...settings} className="slider">
        {products.map((product) => (
          <div key={product.id} className="slider-item">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ProductList;
