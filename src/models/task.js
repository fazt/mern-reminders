const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Task', TaskSchema);
