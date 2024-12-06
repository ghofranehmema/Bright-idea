const mongoose = require("mongoose");

// Définition du schéma pour une idée avec les timestamps activés
const IdeaSchema = new mongoose.Schema(
  {
    content: { 
      type: String, 
      required: true 
    },
    author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", // Référence à l'utilisateur qui a publié l'idée
      required: true
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" // Référence aux utilisateurs qui ont aimé cette idée
    }]
  },
  {
    timestamps: true // Active l'ajout des champs createdAt et updatedAt
  }
);


IdeaSchema.statics.validateIdea = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(5).required(),
  });
  return schema.validate(data);
};

module.exports = mongoose.model("Idea", IdeaSchema);
