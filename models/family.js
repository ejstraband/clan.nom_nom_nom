const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const Family = mongoose.model("Family", familySchema);

module.exports = Family;