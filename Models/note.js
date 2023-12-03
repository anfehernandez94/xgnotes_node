// noteModel.js
const pool = require('../db');

const getNotes = async () => {
    const [rows] = await pool.execute('SELECT * FROM notes ORDER BY creationDate');
    return rows;
};

const getNoteById = async (noteId) => {
    const [row] = await pool.execute('SELECT * FROM notes WHERE id = ?  ORDER BY creationDate LIMIT 1', [noteId]);
    return row[0];
};

const createNote = async (note) => {
    const [result] = await pool.execute('INSERT INTO notes (title, description, creationDate, status) VALUES (?, ?, ?, ?)',
        [
            note.title,
            note.description,
            note.creationDate,
            note.status,
        ]);
    return result.insertId;
};

const updateNote = async (noteId, updatedNote) => {
    const [result] = await pool.execute(
        'UPDATE notes SET title = ?, description = ?, creationDate = ?, updateDate=?, status = ? WHERE id = ?',
        [updatedNote.title, updatedNote.description, updatedNote.creationDate, updatedNote.updateDate, updatedNote.status, noteId]
    );
    return result.affectedRows > 0;
};

const deleteNote = async (noteId) => {
    const [result] = await pool.execute('DELETE FROM notes WHERE id = ?', [noteId]);
    return result.affectedRows > 0;
};

module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote };
