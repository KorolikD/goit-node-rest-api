const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models");
var Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tpmPath, originalname } = req.file;

  const newFilename = `${_id}_${originalname}`;
  const publicPath = path.join(avatarsDir, newFilename);
  const avatarURL = path.join("avatars", newFilename);

  await Jimp.read(tpmPath)
    .then((image) => {
      return image.resize(250, 250).write(tpmPath);
    })
    .catch((error) => {
      console.error("Error while handle Jimp image", error);
    });

  try {
    await fs.rename(tpmPath, publicPath);

    await User.findByIdAndUpdate(_id, { avatarURL });

    return res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tpmPath);
    throw error;
  }
};

module.exports = updateAvatar;
