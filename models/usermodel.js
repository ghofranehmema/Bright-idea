const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  name: String,
  alias: String,
  email: { type: String, unique: true },
  password: String,
});

userSchema.statics.validateUser = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    alias: Joi.string().min(3).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const User = mongoose.model('User', userSchema);


module.exports = User;
