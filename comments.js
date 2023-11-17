// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');

// Manejar la solicitud para obtener comentarios
router.get('/comments', commentController.getComments);

// Manejar la solicitud para agregar un comentario
router.post('/comments', commentController.addComment);

// Otros manejadores de solicitud pueden agregarse según sea necesario

module.exports = router;
