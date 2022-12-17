const express = require("express")
const { register, login, contactinfo, feedback, payment } = require("../controllers/usercontroller")
const router = express.Router()

router.route("/signup").post(register)
router.route("/login").post(login)
router.route("/contactinfo").post(contactinfo)
router.route("/feedback").post(feedback)
router.route("/payment").post(payment)

module.exports = router;
