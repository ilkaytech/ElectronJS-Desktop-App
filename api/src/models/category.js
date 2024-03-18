"use strict";
/* --------------------------------------
      POİNT OF SALE ELECTRON PROJECT
----------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "name": "Category 1"
}
/* ------------------------------------------------------- */
// Category Model:
const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { collection: "categories", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Category", CategorySchema);
