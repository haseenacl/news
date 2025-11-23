import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    content: { type: String },
    author: { type: String },
    imageUrl: { type: String },
    category: { type: String, default: "general" },
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);

export default News;   // <-- IMPORTANT
