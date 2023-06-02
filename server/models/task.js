import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    done: {
      type: Boolean,
      default: false,
    },
    tags: [{ type: String, trim: true }],
    date: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", TaskSchema);
