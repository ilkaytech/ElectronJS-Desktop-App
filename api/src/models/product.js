"use strict";
/* --------------------------------------
      POİNT OF SALE ELECTRON PROJECT
----------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "name": "Product 1"
}
/* ------------------------------------------------------- */
// Product Model:
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { collection: "products", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Product", ProductSchema);
