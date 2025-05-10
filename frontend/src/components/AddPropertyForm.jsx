import { useState } from 'react';
import { addProperty } from '../api';
import { useNavigate } from 'react-router-dom';
import '../styles/AddPropertyForm.css';

const AddPropertyForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('location', location);
    formData.append('image', image);

    try {
      await addProperty(formData);
      navigate('/');
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <div className="add-property-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
        <button type="submit">Add </button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
