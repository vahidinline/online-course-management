import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  emailVerified: Date,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  progress: [{
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
    completedSessions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Session',
    }],
    examsPassed: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam',
    }],
  }],
}, {
  timestamps: true,
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);