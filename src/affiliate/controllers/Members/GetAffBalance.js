const expressAsyncHandler = require("express-async-handler");

const PaymentModel = require("../../models/PaymentModel");

const GetAffBalance = expressAsyncHandler(async (req, res) => {
  try {
    const affBalance = await PaymentModel.find({ aff_id: req.body.aff_id });

    if (affBalance.length === 0) {
      return res.json({
        status: true,
        pendingPrices: 0,
        withdrawablePrices: 0,
        withdrawnPrices: 0,
        message: "Success",
      });
    }

    // Calculate sum of price where kind is "pending"
    const sumOfPendingPrices = affBalance
      .filter((item) => item.kind === "Pending")
      .reduce((sum, item) => sum + item.price, 0);
    const sumOfWithdrawablePrices = affBalance.find(
      (item) => item.kind === "Withdrawable"
    ).price;
    const sumOfWithdrawnPrices = affBalance.find(
      (item) => item.kind === "Withdrawn"
    ).price;

    res.json({
      status: true,
      pendingPrices: sumOfPendingPrices,
      withdrawablePrices: sumOfWithdrawablePrices,
      withdrawnPrices: sumOfWithdrawnPrices,
      message: "Success",
    });
  } catch (error) {
    res.json({ status: false, error });
  }
});

module.exports = GetAffBalance;
