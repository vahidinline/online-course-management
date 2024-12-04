import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
    required: true,
  },
  questions: [{
    question: {
      type: String,
      required: true,
    },
    options: [{
      text: String,
      isCorrect: Boolean,
    }],
    type: {
      type: String,
      enum: ['multiple-choice', 'single-choice'],
      default: 'single-choice',
    },
  }],
  passingScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  timeLimit: {
    type: Number, // in minutes
    required: true,
  },
}, {
  timestamps: true,
});

export const Exam = mongoose.models.Exam || mongoose.model('Exam', examSchema);