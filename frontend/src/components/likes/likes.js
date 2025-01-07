import React from 'react';
import { Link } from 'react-router-dom'; 
import './likes.css';// Importez Link pour la navigation interne

const LikesPage = () => {
  return (
    <section>
      <div className="square-text">
        <p>
          <strong>Dali said:</strong> What if we try inventing a dream machine that breaks down tasks to be able to reach that dream?
        </p>
      </div>
      <p><strong>People who liked this post:</strong></p>
      <table border="5">
        <thead>
          <tr>
            <th>Alias</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {/* Utilisation de Link pour la navigation interne */}
          <tr>
            <td><Link to="/profile/Brahim" className="user-link">Brahim</Link></td>
            <td>Brahim Rezgui Hmema</td>
          </tr>
          <tr>
            <td><Link to="/profile/Fatma" className="user-link">Fatma</Link></td>
            <td>Fatma Ben Mustapha</td>
          </tr>
          <tr>
            <td><Link to="/profile/Jannet" className="user-link">Jannet</Link></td>
            <td>Jannet Ferjani</td>
          </tr>
          <tr>
            <td><Link to="/profile/Mohamed" className="user-link">Mohamed</Link></td>
            <td>Skander Ben Mustapha</td>
          </tr>
          <tr>
            <td><Link to="/profile/Khaoula" className="user-link">Khaoula</Link></td>
            <td>Khaoula Ben Mustapha</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default LikesPage;