const express = require("express");
const { connectDB } = require("../config/db");
const {
  
  createAccount,
  getVoters,
  getVotersByMobile,
  login
} = require("../controllers/user");

let gfs;

(async function () {
  gfs = await connectDB();
})();

const router = express.Router();

router.post("/users/createAccount", createAccount);
router.get("/users/getVoters", getVoters);
router.post("/users/getVotersByMobile", getVotersByMobile);
router.post("/users/login", login);


module.exports = router;
