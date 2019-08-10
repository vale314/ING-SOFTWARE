const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Message = require('../models/message');
const User = require('../models/User');

// @route     GET api/message
// @desc      Get all messages
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const messages = await Message.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/message
// @desc      Add new messages
// @access    Private
router.post(
  '/',
  [
    auth
  ],
  async (req, res) => {
    
    const { msj, _email } = req.body;

    let userSend = await User.findOne({"email":_email});

    //buscar tus datos
    let user = await User.findById(req.user.id);
    
    const {name, email, phone, type} = user;

    try {
      const newMessage = new Message({
        name,
        email,
        phone,
        type,
        msj,
        user: userSend._id
      });

      await newMessage.save();

      res.status(200).send('Saved');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
