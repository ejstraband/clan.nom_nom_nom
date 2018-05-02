const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Family = mongoose.model("Family", familySchema);

module.exports = Family;