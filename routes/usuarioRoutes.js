import express from 'express';
import { registrarUsuario, login, logout, getAllUsuario, getUsuarioById, updateUsuario, deleteUsuario } from '../controllers/usuarioController.js';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/criar', registrarUsuario);
router.post('/login', login);
router.post('/logout', logout);
router.get('/usuario', verificarToken, getAllUsuario);
router.get('/usuario/:id', verificarToken, getUsuarioById);
router.put('/usuario/:id', verificarToken, updateUsuario);
router.delete('/usuario/:id', verificarToken, deleteUsuario);

export default router;
