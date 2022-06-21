const express = require("express");
const { connectDB } = require("../config/db");
const {
  
  createAccount,
  getVoters,
  getVotersByMobile,
  login,
  getAllKarkun,
  getStat
} = require("../controllers/user");

let gfs;

(async function () {
  gfs = await connectDB();
})();

const router = express.Router();

router.post("/users/createAccount", createAccount);
router.get("/users/getVoters", getVoters);
router.post("/users/getVotersByMobile", getVotersByMobile);
router.get("/users/getAllKarkun", getAllKarkun);
router.get("/users/getStat", getStat);


router.post("/users/login", login);


module.exports = router;
