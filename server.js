require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Permitir solicitudes desde todos los orígenes
app.use(cors());

// Middlewares
app.use(express.json());

// Routes
const notesRoutes = require('./Routes/noteRoutes');
app.use('/notes', notesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;