import { useEffect, useState } from 'react';
import { getProperties } from '../api';
import PropertyCard from '../components/PropertyCard';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await getProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    let filtered = properties;

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter((p) =>
        p.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (priceFilter) {
      const max = parseInt(priceFilter);
      filtered = filtered.filter((p) => p.price <= max);
    }

    setFilteredProperties(filtered);
  }, [searchTerm, locationFilter, priceFilter, properties]);

  return (
    <div className="dashboard-container">
      <h2>Available Properties</h2>

      {/* Search & Filters */}
      <div className="filters">
        <div className="filter-group">
          <label><b>Search Title</b></label>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label><b>Filter by Location</b></label>
          <input
            type="text"
            placeholder="Enter location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label><b>Max Price</b></label>
          <input
            type="number"
            placeholder="e.g. 100000"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="property-list">
        {filteredProperties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
