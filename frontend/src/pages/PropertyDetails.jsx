import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProperty } from '../api';
import '../styles/PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const { data } = await getProperty(id);
        console.log("Fetched property:", data); // 🔍 Check what you get here
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div className="property-details-container">
      <div className="property-image">
        <img src={property.imageUrl} alt={property.title} />
      </div>

      <div className="property-info">
        <h2>{property.title}</h2>
        <p><strong>Price:</strong> ₹ {property.price}</p>
        <p><strong>Location:</strong> {property.location}</p>
      </div>

      <div className="contact-details">
        <h3>Contact Details</h3>
        <div className="contact-field">
          <strong>Dealer's Name:</strong> {property.user?.name || "N/A"}
        </div>
        <div className="contact-field">
          <strong>Phone Number: +91 **********</strong> 
        </div>
        <div className="contact-field">
          <strong>Email:</strong> {property.user?.email || "N/A"}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
