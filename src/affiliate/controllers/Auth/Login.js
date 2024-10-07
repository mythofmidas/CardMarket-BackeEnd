const expressAsyncHandler = require("express-async-handler");

const getToken = require("../../utils/GetToken");

const Users = require("../../models/UsersModel");

const Login = expressAsyncHandler(async (req, res) => {
  const { affiliateId, password } = req.body;

  try {
    const user = await Users.findOne({ affiliateId });

    if (!user) {
      res.json({
        status: false,
        message: "Affiliate ID or Password not correct.",
      });
    } else {
      if (await user.CheckPass(password)) {
        res.json({
          status: true,
          name: user.fullName,
          token: getToken({
            id: user._id,
            email: user.email,
            fullName: user.fullName,
            role: user.role,
            rank: user.rank,
          }),
          message: "Login Successful",
        });
      } else {
        res.json({
          status: false,
          message: "Affiliate ID or Password not correct.",
        });
      }
    }
  } catch (error) {
    res.json({ error, message: "Login unsuccessful" });
  }
});

module.exports = Login;
