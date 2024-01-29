const { HttpError, ctrlWrapper } = require("../../helpers");
const Contact = require("../../models");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = ctrlWrapper(updateContact);
