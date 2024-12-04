import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  order: {
    type: Number,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  content: {
    video: {
      url: String,
      duration: Number,
    },
    text: String,
    documents: [{
      title: String,
      url: String,
      type: String,
    }],
    images: [{
      url: String,
      caption: String,
    }],
  },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
  },
}, {
  timestamps: true,
});

export const Session = mongoose.models.Session || mongoose.model('Session', sessionSchema);