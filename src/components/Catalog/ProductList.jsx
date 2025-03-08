import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import ProductModal from "./ProductModal";
import products from "../../products";
import Header from "../Header";
import Footer from "../Footer";

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(0); // Estado para controlar a categoria atual
  const navigate = useNavigate();

  // Exemplo de categorias de produtos
  const categories = [
    { name: "Shakes", products: products.slice(0, 9) }, // Primeiros 9 produtos
    {
      name: "Vitaminas, Minerais e Suplementos",
      products: products.slice(9, 15), // Próximos 6 produtos
    },
    {
      name: "Cuidados com Pele, Corpo e Cabelo",
      products: products.slice(15, 21), // Últimos 6 produtos
    },
  ];

  // Função para mudar de categoria
  const handleNextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % categories.length);
  };

  const handlePrevCategory = () => {
    setCurrentCategory(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  return (
    <>
      <Header />
      <div className="product-list-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        {/* Título e setas de navegação */}
        <div className="category-navigation">
          <button onClick={handlePrevCategory} className="nav-arrow">
            <FaArrowCircleLeft />
          </button>
          <h1>{categories[currentCategory].name}</h1>
          <button onClick={handleNextCategory} className="nav-arrow">
            <FaArrowCircleRight />
          </button>
        </div>

        {/* Lista de produtos */}
        <div className="product-list">
          {categories[currentCategory].products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
            </div>
          ))}
        </div>

        {/* Modal de produto */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
