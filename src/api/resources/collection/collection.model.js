import mongoose from 'mongoose'

const collectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    category: {
      type: String,
      required: true,
    },
    resources: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'resource',
      },
    ],
    hearts: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
)

export const Collection = mongoose.model('collection', collectionSchema)
