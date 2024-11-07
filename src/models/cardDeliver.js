const mongoose = require("mongoose");

const cardDeliverSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  user_name: { type: String, required: true },
  gacha_id: { type: String, required: true },
  gacha_name: { type: String, required: true },
  gacha_price: { type: Number, required: true },
  prizes: { type: Array, required: true },
  status: { type: String, required: true, default: "Pending" },
  gacha_date: { type: Date, default: Date.now, required: true },
});

const CardDeliver = mongoose.model(
  "CardDeliver",
  cardDeliverSchema,
  "cardDeliver"
);

module.exports = mongoose.model.CardDeliver || CardDeliver;