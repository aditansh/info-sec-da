require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(password);

    if (!(username && password)) {
      return res.status(400).json({
        status: false,
        message: "All inputs are required",
      });
    }

    // const user = await Users.findOne({ where: { username: username } });

    return res.status(400).json({
      status: false,
      msg: "Invalid credentials",
    });
  } catch (err) {
    res.send({
      staus: false,
      msg: err,
    });
  }
};
