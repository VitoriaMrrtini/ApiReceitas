import express from 'express';
import { getFavoritosByUsuario, addFavorito, removeFavorito } from '../controllers/favoritosControllers.js';

const router = express.Router();

router.get("/", getFavoritosByUsuario);
router.post("/", addFavorito);
router.delete("/", removeFavorito);

export default router;
