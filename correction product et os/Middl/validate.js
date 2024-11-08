var yup = require("yup");

async function validate(req, res, next) {
  try {
    const Schema = yup.object().shape({
      username: yup
        .string()
        .matches(/^[A-Z][A-Z]/)
        .required(),
      email: yup
        .string()
        .email()
        .matches(/@esprit.tn/)
        .required(),
      cin: yup.number().required(),
    });
    await Schema.validate(req.body);
    next();
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = validate;
