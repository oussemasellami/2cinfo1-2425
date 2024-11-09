var Joueur = require("../Models/joueur");
var Partie = require("../Models/partie");

async function addjoueur(req, res) {
  try {
    const joueur = new Joueur({
      pseudo: req.body.pseudo,
      sante: 100,
      score: 0,
    });
    await joueur.save();
    res.status(200).send("good added");
  } catch (err) {
    res.status(400).send(err);
  }
}

async function showjoueur(req, res) {
  try {
    const j = await Joueur.find();
    res.json(j);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function showbyidjoueur(req, res) {
  try {
    const j = await Joueur.findById(req.params.id);
    res.json(j);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deletejoueur(req, res) {
  try {
    const j = await Joueur.findByIdAndDelete(req.params.id);
    //const userupdated= await User.findById(req.params.id)
    res.status(200).send("deleted");
  } catch (err) {
    res.status(400).send(err);
  }
}

async function attaque(req, res) {
  try {
    const j1 = await Joueur.findById(req.params.id1);
    const j2 = await Joueur.findById(req.params.id2);

    score1 = j1.score + 10;
    sante1 = j2.sante - 20;

    //update

    const j1u = await Joueur.findByIdAndUpdate(
      req.params.id1,
      {
        score: score1,
      },
      { new: true }
    );
    const j2u = await Joueur.findByIdAndUpdate(
      req.params.id2,
      {
        sante: sante1,
      },
      { new: true }
    );

    res.status(200).send("...." + j1u + "..............." + j2u);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function addpartie(req, res) {
  try {
    const partie = new Partie({
      nom: req.body.nom,
      joueur_1: req.params.id1,
      joueur_2: req.params.id2,
      etat: "en cours",
    });
    await partie.save();
    res.status(200).send("good added");
  } catch (err) {
    res.status(400).send(err);
  }
}

async function addpartiesocket(data) {
  try {
    const partie = new Partie({
      nom: data.nom,
      joueur_1: data.id1,
      joueur_2: data.id2,
      etat: "en cours",
    });
    await partie.save();
    console.log("good added");
  } catch (err) {
    console.log(err);
  }
}

async function getbyidjoueur(data) {
  try {
    const j1 = await Joueur.findById(data.id1);
    const j2 = await Joueur.findById(data.id2);
    return { j1, j2 };
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  addjoueur,
  showjoueur,
  showbyidjoueur,
  deletejoueur,
  attaque,
  addpartie,
  addpartiesocket,
  getbyidjoueur
};
