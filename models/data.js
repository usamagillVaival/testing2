const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    City:{
      type:String
    },
  },
  { strict: false }

);
module.exports = mongoose.model("data", dataSchema,);
