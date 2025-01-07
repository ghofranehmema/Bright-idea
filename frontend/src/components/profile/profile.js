import React from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams
import './profile.css';

const Profile = () => {
  const { username } = useParams(); // Récupérer le nom d'utilisateur depuis l'URL

  return (
    <div className="profile-container">
      <section className="profile-section">
        <div className="user-info">
          <p><strong>Name:</strong> {username}</p> {/* Affiche le nom de l'utilisateur */}
          <p><strong>Alias:</strong> {username}</p>
          <p><strong>Email:</strong> example@gmail.com</p>
        </div>
        <hr />
        <div className="stats">
          <p><strong>Total number of posts:</strong> 4</p>
          <p><strong>Total number of likes:</strong> 2</p>
        </div>
      </section>
    </div>
  );
};

export default Profile;

