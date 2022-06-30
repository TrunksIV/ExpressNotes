const notesController = require("../controllers/notesController");

const router = require("express").Router();

router.post("/", notesController.addNote);
router.get("/", notesController.getAllNotes);
router.get("/:id", notesController.getOneNote);
router.put("/:id", notesController.updateNote);
router.delete("/:id", notesController.deleteNote);

module.exports = router;
