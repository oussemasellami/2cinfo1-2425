const Classroom = require("../model/classroom");

async function add(req, res, next) {
  try {
    console.log("body :" + JSON.stringify(req.body));
    const classroom = new Classroom(req.body);
    await classroom.save();
    res.send("classroom add");
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res, next) {
  try {
    const data = await Classroom.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res, next) {
  try {
    await Classroom.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
}

async function deleteclass(req, res, next) {
  try {
    await Classroom.findByIdAndDelete(req.params.id);
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { add, show, update, deleteclass };
