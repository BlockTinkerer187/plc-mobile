const express = require("express")
const router = express.Router()
router.mountPath = "/"

// Service PWA
router.get("/app", (req, res) => {  res.sendFile("/app/views/app.html") })

router.get("/", (req, res) => {  res.redirect("/app")  })

module.exports = router