import express from 'express';
import { getAlmocoImgById, getAlmocoImgs } from '../controllers/almocoControllers.js';

const router = express.Router();

router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getAlmocoImgs(req, res);

    if (params.id)
        return getAlmocoImgById(req, res);
    // else if (params.nome)
    //     return getUsersByNome(req, res);
    // else if (params.titulo)
    //     return getReceitaByTitulo(req, res);
});

export default router;