import { Link } from 'react-router-dom';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.imageUrl} alt={property.title} />
      <h3>{property.title}</h3>
      <p>Price: ₹ {property.price}</p>
      <p>Location: {property.location}</p>
      <Link to={`/property/${property._id}`}>View Details</Link>
    </div>
  );
};

export default PropertyCard;
