import mongoose from 'mongoose'

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    url: {
      type: String,
      required: true,
    },
    collection: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export const Resource = mongoose.model('resource', resourceSchema)
