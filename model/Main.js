const mongoose = require("mongoose");

const mainSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    total: {
      type: Number,
    },
    Cat0: {
      type: Number,
    },
    Cat1: {
      type: Number,
    },
    Cat2: {
      type: Number,
    },
    Cat3: {
      type: Number,
    },
    Cat4: {
      type: Number,
    },
    Cat5: {
      type: Number,
    },
    Cat6: {
      type: Number,
    },
    Cat7: {
      type: Number,
    },
    Cat8: {
      type: Number,
    },
    Cat9: {
      type: Number,
    },
    Cat10: {
      type: Number,
    },
    Cat11: {
      type: Number,
    },
    Cat12: {
      type: Number,
    },
    Cat13: {
      type: Number,
    },
    Cat14: {
      type: Number,
    },
    Cat15: {
      type: Number,
    },
  },
  { collection: "LivingCat" }
);

const Main = mongoose.model("Main", mainSchema);
module.exports = { Main };
