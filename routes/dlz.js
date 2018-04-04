/*
 *  Load packages at top.
 */
const express = require("express");
const router = express.Router();

/*
 *  Load Controllers here. 
 */
const dlzCtrl = require("../controller/dlz");
/*
 * Insert Name, Id in DB.
 */
router.post("/create", (req, res, next) => {
  //variable required
  let payload = {
    name: req.body.name,
    id: req.body.id
  };
  dlzCtrl
    .create(req, payload)
    .then(saved_doc => {
      return res.json(saved_doc);
    })
    .catch(error => {
      //we can handle errors more optimizely.
      return res.json({
        message: error.message || "Internal server Error",
        error: error
      });
    });
});
/*
 * Get all Name, Id from DB.
 */
router.get("/", (req, res, next) => {
  let payload = {};
  dlzCtrl
    .get_all(req, payload)
    .then(all_doc => {
      return res.json(all_doc);
    })
    .catch(error => {
      //we can handle errors more optimizely.
      return res.json({
        message: error.message || "Internal server Error",
        error: error
      });
    });
});

module.exports= router;