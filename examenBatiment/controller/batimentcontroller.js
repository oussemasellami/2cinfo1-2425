const Batiment = require("../model/batiment");
const Niveau = require("../model/niveau");

async function addbatiment(req, res, next) {
  try {
    const batiment = new Batiment({
      nom: req.body.nom,
      description: "Batiment a Tunis",
      adress: "Tunis",
      nbr_niveau: 0,
    });
    const niv = new Niveau({
      nom: "niveau2",
      nbr_chambre: 0,
      etat_construction: false,
      id_batiment: "65e6f4b5346636f507b36752",
    });
    await batiment.save();
    await niv.save();
    res.status(200).send("add good");
  } catch (err) {
    console.log(err);
  }
}

async function getallbatiemnt(req, res, next) {
  try {
    const data = await Batiment.find();
    //return data;
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function calculBatiemnt(req, res, next) {
  try {
    const data = await Batiment.find();
    let i = 0;
    data.forEach((element) => {
      //console.log(element);
      if (element.nbr_niveau >= 5 && element.adress == "Tunis") i++;
    });
    return i;
  } catch (err) {
    console.log(err);
  }
}

async function getallNiveau(req, res, next) {
  try {
    const data = await Niveau.find();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function getbyidbatiment(req, res, next) {
  try {
    const data = await Batiment.findById(req.params.id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function deletebyidBatiment(req, res, next) {
  try {
    const data = await Batiment.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function deletebyidniveau(req, res, next) {
  try {
    const data = await Niveau.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}
async function construction(req, res, next) {
  try {
    console.log(req.params.id);
    const n = await Niveau.findById(req.params.id);
    console.log(n);
    const b = await Batiment.findById(n.id_batiment);
    //n.etat_construction = true;
    nbr_niveau = b.nbr_niveau + 1;

    const niv = await Niveau.findByIdAndUpdate(req.params.id, {
      etat_construction: true,
    });
    const bat = await Batiment.findByIdAndUpdate(n.id_batiment, {
      nbr_niveau: nbr_niveau,
    });
    return "construit";
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addbatiment,
  getallbatiemnt,
  getbyidbatiment,
  deletebyidBatiment,
  construction,
  //addpartie,
  //addpartiesocket,
  //affichesocket,
  getallNiveau,
  calculBatiemnt,
  deletebyidniveau,
};
