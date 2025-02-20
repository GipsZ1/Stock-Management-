import { useState } from "react";
import "./products.css";

const Product = () => {
  const [product, setProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    unit_price: "",
    image: null,
    quantity: 0,
    min_quantity: 0,
    is_expired: false,
    expiry_date: "",
    on_proaction: false,
    promotion_start_date: "",
    promotion_end_date: "",
    prono_price: "",
    category_id: "",
    subcategory_id: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="from-container">
      <form className="productFrom">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          name="unit_price"
          placeholder="Price"
          value={formData.unit_price}
          onChange={handleChange}
          required
        />
        <input type="file" accept="image/*" />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <input
          type="number"
          name="min_quantity"
          placeholder="Min Quantity"
          value={formData.min_quantity}
          onChange={handleChange}
        />
        <input
          type="date"
          name="expiry_date"
          value={formData.expiry_date}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="is_expired"
          checked={formData.is_expired}
          onChange={handleChange}
        />{" "}
        Is Expired
        <input
          type="checkbox"
          name="on_proaction"
          checked={formData.on_proaction}
          onChange={handleChange}
        />{" "}
        On Promotion
        <input
          type="date"
          name="promotion_start_date"
          value={formData.promotion_start_date}
          onChange={handleChange}
        />
        <input
          type="date"
          name="promotion_end_date"
          value={formData.promotion_end_date}
          onChange={handleChange}
        />
        <input
          name="prono_price"
          placeholder="Promo Price"
          value={formData.prono_price}
          onChange={handleChange}
        />
        <input
          name="category_id"
          placeholder="Category ID"
          value={formData.category_id}
          onChange={handleChange}
          required
        />
        <input
          name="subcategory_id"
          placeholder="Subcategory ID"
          value={formData.subcategory_id}
          onChange={handleChange}
        />
        <button type="submit">Create Product</button>
      </form>

      {product && (
        <div>
          <h2>Product Created</h2>
          <pre>{JSON.stringify(product, null, 2)}</pre>
          {product.image && <img src={product.image} alt="Product" />}
        </div>
      )}
    </div>
  );
};

export default Product;
