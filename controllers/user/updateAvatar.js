const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models");
var Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  await Jimp.read(tempUpload)
    .then((image) => {
      return image.resize(250, 250).write(tempUpload);
    })
    .catch((err) => {
      console.error(err);
    });

  const newFilename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, newFilename);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", newFilename);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
