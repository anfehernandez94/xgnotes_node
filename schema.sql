CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    creationDate DATE,
    updateDate DATE,
    status ENUM('pendiente', 'completada') DEFAULT 'pendiente'
);