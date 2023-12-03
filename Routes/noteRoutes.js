// notesRoutes.js
const express = require('express');
const router = express.Router();
const notesController = require('../Controllers/notesController');

router.post('/', notesController.createNote);
router.get('/', notesController.getNotes);
router.get('/:id', notesController.getNoteById);
router.delete('/:id', notesController.deleteNote);
router.put('/:id', notesController.updateNote);

module.exports = router;
