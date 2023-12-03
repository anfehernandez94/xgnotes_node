// notesController.js
const noteModel = require('../Models/note.js');

const getNotes = async (req, res) => {
    try {
        const notes = await noteModel.getNotes();
        res.status(200).json({ success: true, notes });
    } catch (error) {
        // console.error('Error fetching notes:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getNoteById = async (req, res) => {
    const noteId = req.params.id;
    try {
        const note = await noteModel.getNoteById(noteId);
        if (note)
            res.status(200).json({ success: true, note });
        else
            res.status(204).json({ success: false, error: 'Note not found' });
    } catch (error) {
        // console.error('Error fetching note:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const createNote = async (req, res) => {
    const { title, description, creationDate, status } = req.body;
    const newNote = { title, description, creationDate, status };

    try {
        const noteId = await noteModel.createNote(newNote);
        res.status(201).json({ success: true, noteId });
    } catch (error) {
        // console.error('Error creating note:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const updateNote = async (req, res) => {
    const noteIdToUpdate = req.params.id;
    const { title, description, creationDate, status } = req.body;
    const updateDate = new Date();
    const updatedNote = { title, description, creationDate, updateDate, status };

    try {
        const isUpdated = await noteModel.updateNote(noteIdToUpdate, updatedNote);

        if (isUpdated) {
            res.status(200).json({ success: true, message: 'Note updated successfully' });
        } else {
            res.status(204).json({ success: false, message: 'Note not found' });
        }
    } catch (error) {
        // console.error('Error updating note:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const deleteNote = async (req, res) => {
    const noteIdToDelete = req.params.id;

    try {
        const isDeleted = await noteModel.deleteNote(noteIdToDelete);

        if (isDeleted) {
            res.status(200).json({ success: true, message: 'Note deleted successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Note not found' });
        }
    } catch (error) {
        // console.error('Error deleting note:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote };
