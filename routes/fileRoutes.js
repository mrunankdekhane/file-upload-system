const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const fileController = require("../controllers/fileController");

router.get("/", (req, res) => res.render("index"));

router.post("/upload",
  upload.single("file"),
  fileController.uploadFile
);

router.get("/files", fileController.getFiles);
router.get("/download/:id", fileController.downloadFile);

module.exports = router;