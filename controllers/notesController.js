const db = require("../models");

const Notes = db.notes;

// Create Note

const addNote = async (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  };

  const note = await Notes.create(data);

  res.status(200).send(note);
};

// get all Notes
const getAllNotes = async (req, res) => {
  const notes = await Notes.findAll({
    order: [["id", "DESC"]],
  });
  res.status(200).send(notes);
};

// get Single Note
const getOneNote = async (req, res) => {
  const id = req.params.id;
  const note = await Notes.findOne({ where: { id: id } });
  res.status(200).send(note);
};

// Update Note
const updateNote = async (req, res) => {
  const id = req.params.id;
  const note = await Notes.update(req.body, { where: { id: id } });
  res.status(200).send(note);
};

// Update Note
const deleteNote = async (req, res) => {
  const id = req.params.id;
  await Notes.destroy({ where: { id: id } });
  res.status(200).send("Note is deleted");
};

module.exports = {
  addNote,
  getAllNotes,
  getOneNote,
  updateNote,
  deleteNote,
};
