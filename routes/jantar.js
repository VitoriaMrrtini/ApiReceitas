import express from 'express';
import { getJantarImgById, getJantarImgs } from '../controllers/jantarControllers.js';

const router = express.Router();

router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getJantarImgs(req, res);

    if (params.id)
        return getJantarImgById(req, res);
    // else if (params.nome)
    //     return getUsersByNome(req, res);
    // else if (params.titulo)
    //     return getReceitaByTitulo(req, res);
});

export default router;