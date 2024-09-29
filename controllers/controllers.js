const User = require('../models/usermodel')
const Address = require('../models/addressmodel')

const usercontroller = (async(req, res) => {
    const { name, addressLine } = req.body;
  
    const user = new User({ name });
    const savedUser = await user.save();
  
    const address = new Address({
      addressLine,
      userId: savedUser._id,
    });
    const savedAddress = await address.save();
  
    res.status(201).json({ user: savedUser, address: savedAddress });
});

module.exports = usercontroller