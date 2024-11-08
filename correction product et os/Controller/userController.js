var User = require("../Models/user");

async function add(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send("good added");
  } catch (err) {
    res.status(400).send(err);
  }
}


async function show (req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async function showbyid (req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async function showbyname(req, res) {
    try {
      const username = req.params.name;
      const user = await User.findOne({ username });
      res.json(user);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async function updateuser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      //const userupdated= await User.findById(req.params.id)
      res.status(200).json(user);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async function deleteuser (req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      //const userupdated= await User.findById(req.params.id)
      res.status(200).send("deleted");
    } catch (err) {
      res.status(400).send(err);
    }
  }

module.exports = { add ,show,showbyid,showbyname,updateuser,deleteuser};
