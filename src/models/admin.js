const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//gacha category schema
const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  display_order: { type: Number, required: true, default: 0 },
});

//remain prize list
const prizeSchema = new Schema({
  name: { type: String },
  rarity: { type: Number },
  cashback: { type: Number },
  img_url: { type: String },
  status: { type: String, default: "unset" }, //prize status- unset, set,
  grade: { type: Number },
  type: { type: String, default: "" },
  last_effect: { type: Boolean, default: true },
});

const pointSchema = new Schema({
  point_num: { type: Number, required: true },
  price: { type: Number, required: true },
  img_url: { type: String, required: true },
});

const rankSchema = new Schema({
  name: { type: String, required: true },
  bonus: { type: Number, required: true },
  start_amount: { type: Number },
  end_amount: { type: Number },
  img_url: { type: String, required: true },
  last: { type: Boolean, required: true },
});

const themeSchema = new Schema({
  brand: { type: String },
  logoUrl: { type: String },
  bgColor: { type: String },
  textColor: { type: String },
});

const termsSchema = new Schema({
  content: { type: String, required: true }, // Store large text here
  createdAt: { type: Date, default: Date.now },
});

const AdminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  authority: { type: Object }, //1: read, 2: write, 3: delete
});

const carouselSchema = new Schema({
  link: { type: String, required: true },
  img_url: { type: String, required: true },
});

const Category = mongoose.model("Category", categorySchema, "admin_category");
const Prize = mongoose.model("Prize", prizeSchema, "admin_prize");
const Point = mongoose.model("Point", pointSchema, "admin_point");
const Rank = mongoose.model("Rank", rankSchema, "rank");
const Terms = mongoose.model("Term", termsSchema, "terms");
const Themes = mongoose.model("Theme", themeSchema, "themes");
const Carousels = mongoose.model("carousels", carouselSchema, "carousels");
const Administrator = mongoose.model("Adminer", AdminSchema, "admin_adminer");

const adminSchemas = {
  Category: Category,
  Prize: Prize,
  Point: Point,
  Rank: Rank,
  Terms: Terms,
  Themes: Themes,
  Carousels: Carousels,
  Administrator: Administrator,
};

module.exports = adminSchemas;
