const File = require("../models/File");
const path = require("path");

exports.uploadFile = async (req, res) => {
  try {
    const file = new File({
      filename: req.file.filename,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path
    });

    await file.save();
    res.redirect("/");
  } catch (err) {
    res.send(err.message);
  }
};

exports.getFiles = async (req, res) => {
  const files = await File.find().sort({ createdAt: -1 });
  res.render("files", { files });
};

exports.downloadFile = async (req, res) => {
  const file = await File.findById(req.params.id);
  if (!file) return res.status(404).send("File not found");

  res.download(path.resolve(file.path), file.originalname);
};