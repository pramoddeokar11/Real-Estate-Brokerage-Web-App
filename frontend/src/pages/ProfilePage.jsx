import { useState, useEffect } from "react";
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (storedUser) {
      setUser(storedUser);
    }

    setLoading(false); 
  }, []);

  if (loading) {
    return <h2 className="profile-loading">Loading...</h2>; 
  }

  if (!user) {
    return <h2 className="profile-error">User not found. Please log in.</h2>; 
  }

  return (
    <div className="profile-page">
      <div className="profile-content">
        <div className="profile-card">
        <h2>Profile</h2>
        <div className="profile-image-container">
         <img
           src="https://i1.rgstatic.net/ii/profile.image/1089996782080002-1636886892545_Q512/Wadha-Nasser.jpg" // Replace with default profile image URL
           alt="Profile"
        className="profile-image"
          />
        </div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
