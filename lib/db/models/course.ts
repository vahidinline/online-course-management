import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  thumbnail: String,
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sessions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
  }],
  prerequisites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],
  isPremium: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);