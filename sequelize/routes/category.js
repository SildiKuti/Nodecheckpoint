var express = require("express");
const models = require("../models/index");
const { Where } = require("sequelize/types/utils");
var router = express.Router();

/* GET users listing. */
router.post("/create", async function (req, res, next) {
  const { name, icon } = req.body;
  console.log(name, icon);
  console.log(req);
  const category = await models.Category.create({
    name,
    icon,
  });
  res.send(category);
  console.log(category);
});

router.patch("/:id", async function (req, res, next) {
  const { icon } = req.body;
  const id = parseInt(req.params.id);
  const [update] = await models.Category.update(
    {
      icon,
    },
    {
      where: {
        id,
      },
    }
  );
  if (update > 0) {
    res.send("succesfully updated");
  }
});

module.exports = router;
