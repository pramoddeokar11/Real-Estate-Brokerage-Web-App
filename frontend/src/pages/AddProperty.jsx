import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AddPropertyForm.css';

const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setError("You must be logged in to add a property!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/properties", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add property");
      }

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="add-property-container">
      <h2 className="add-property-title">Add New Property</h2>
      {error && <p className="add-property-error">{error}</p>}
      <form className="add-property-form" onSubmit={handleSubmit}>
        <input
          className="add-property-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="add-property-input"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          className="add-property-input"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          className="add-property-input"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button className="add-property-button" type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
