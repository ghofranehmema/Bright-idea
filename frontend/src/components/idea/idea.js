import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './idea.css';

const Idea = () => {
  const [newIdea, setNewIdea] = useState('');
  const [ideas, setIdeas] = useState([
    {
      _id: 1,
      idea: 'What if we try inventing a dream machine that breaks down tasks to be able to reach that dream?',
      user: 'Dali',
      likes: 5,
      isFixed: true,
      liked: false, 
    },
    {
      _id: 2,
      user: 'Khaoula',
      idea: 'A hologram phone!',
      likes: 2,
      isFixed: true,
      liked: false,
    },
    {
      _id: 3,
      user: 'Fatma',
      idea: 'Let\'s try creating an app that will ask for people\'s problems...',
      likes: 1,
      isFixed: true,
      liked: false,
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedIdeaText, setEditedIdeaText] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/ideas')
      .then((response) => response.json())
      .then((data) => setIdeas((prevIdeas) => [...prevIdeas, ...data]))
      .catch((error) => console.error('Erreur lors du chargement des idées:', error));
  }, []);

  const handleAddIdea = () => {
    if (newIdea.trim() === '') return;

    const newIdeaObject = {
      user: 'You',
      idea: newIdea,
      likes: 0,
      isFixed: false,
      liked: false,   
    };

    fetch('http://localhost:5000/api/ideas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdeaObject),
    })
      .then((response) => response.json())
      .then((data) => {
        setIdeas((prevIdeas) => [...prevIdeas, data]);
        setNewIdea('');
      })
      .catch((error) => console.error('Erreur lors de l\'ajout de l\'idée:', error));
  };

  const handleDeleteIdea = (_id) => {
    fetch(`http://localhost:5000/api/ideas/${_id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setIdeas(ideas.filter((idea) => idea._id !== _id));
        } else {
          console.log('Erreur lors de la suppression');
        }
      })
      .catch((error) => console.error('Erreur lors de la suppression de l\'idée:', error));
  };

  const handleEditIdea = (_id, currentText) => {
    setEditingId(_id);
    setEditedIdeaText(currentText);
  };

  const handleSaveEdit = () => {
    if (editedIdeaText.trim() === '') return;

    setIdeas(
      ideas.map((idea) =>
        idea._id === editingId ? { ...idea, idea: editedIdeaText } : idea
      )
    );

    setEditingId(null);
    setEditedIdeaText('');
  };

  const handleLikeDislike = (_id) => {
    setIdeas(
      ideas.map((idea) => {
        if (idea._id === _id) {
          if (idea.liked) {
            return { ...idea, likes: idea.likes - 1, liked: false }; // Si déjà "like", alors "dislike"
          } else {
            return { ...idea, likes: idea.likes + 1, liked: true }; // Sinon, "like"
          }
        }
        return idea;
      })
    );
  };

  return (
    <div className="idea-container">
      <div className="ideas-container">
        <div className="input-container">
          <textarea
            placeholder="Post something witty here..."
            className="idea-input"
            value={newIdea}
            onChange={(e) => setNewIdea(e.target.value)}
          ></textarea>
          <button className="idea-button" onClick={handleAddIdea}>
            Idea
          </button>
        </div>

        <div className="ideas-list">
          {ideas.map((idea) => (
            <div key={idea._id} className="idea-post">
              <p>
                <strong>
                  <Link className="fix" to={`/profile/${idea.user}`}>{idea.user}</Link>
                </strong>{' '}
                {editingId === idea._id ? (
                  <textarea
                    className="idea-input"
                    value={editedIdeaText}
                    onChange={(e) => setEditedIdeaText(e.target.value)}
                  />
                ) : (
                  idea.idea
                )}
              </p>

              {!idea.isFixed && (
                <>
                  {editingId === idea._id ? (
                    <button className="save-btn" onClick={handleSaveEdit}>Save</button>
                  ) : (
                    <>
                      <button className="edit-btn" onClick={() => handleEditIdea(idea._id, idea.idea)}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDeleteIdea(idea._id)}>Delete</button>
                    </>
                  )}
                </>
              )}

              {idea.isFixed && (
                <div className="like-dislike-container">
                  <button className="like-dislike-btn" onClick={() => handleLikeDislike(idea._id)}>
                    {idea.liked ? 'Dislike' : 'Like'}
                  </button>
                  <Link to={`/likes/${idea._id}`}>
                    <span className="likes-count">{idea.likes} People like this idea</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Idea;
