const mongoose = require("mongoose");
const Joi = require('joi');

// Définition du schéma pour une idée avec les timestamps activés
const IdeaSchema = new mongoose.Schema(
  {
    content: { 
      type: String, 
      required: true 
    },
    author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true
    },
    
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" 
    }]
  },
  {
    timestamps: true 
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
