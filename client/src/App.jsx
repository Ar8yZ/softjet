import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Banner />
      <div style={{ flex: "1" }}>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
