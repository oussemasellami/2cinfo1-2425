var Chat = require("../Models/chat");

async function add(msge) {
  try {
    const chat = new Chat({
      msg: msge,
      date: new Date(),
    });
    await chat.save();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { add };
