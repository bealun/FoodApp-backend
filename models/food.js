import mongoose from 'mongoose'

export const Recipe = mongoose.model('Recipe', {
  title: {
    type: String,
    required: true,
    maxlength: 30,
  },
  shortDescription: {
    type: String,
    maxlength: 140,
  },
  ingredients: [{
      type: String,
      required: true,
    }],
  directions: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  imageName: {
    type: String,
  },
  tags: [{
      type: String,
      reqired: true,
    }],
  createdAt: {
    type: Date, 
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
})