const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
} = require("../services/contactsServices.js");
const { HttpError } = require("../helpers");
const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas.js");

const getAllContacts = async (req, res, next) => {
  try {
    const result = await listContacts();

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getOneContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getContactById(id);

    if (!result) {
      throw HttpError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await removeContact(id);

    if (!result) {
      throw HttpError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const createContact = async (req, res, next) => {
  try {
    const { error } = createContactSchema.validate(req.body);

    if (error) {
      throw HttpError(400);
    }

    const { name, email, phone } = req.body;
    const result = await addContact(name, email, phone);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { error } = updateContactSchema.validate(req.body);

    if (error) {
      throw HttpError(400);
    }

    const { id } = req.params;
    const { name, email, phone } = req.body;

    const result = await updateContactById(id, name, email, phone);
    if (!result) {
      throw HttpError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
};
