import { FaTimes } from "react-icons/fa";

export default function ProductModal({ product, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">
          <FaTimes />
        </button>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <iframe
          width="100%"
          height="315"
          src={product.video}
          title={product.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
