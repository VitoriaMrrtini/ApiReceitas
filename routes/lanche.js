import express from 'express';
import { getLancheImgById, getLancheImgs } from '../controllers/lancheControllers.js';

const router = express.Router();

router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getLancheImgs(req, res);

    if (params.id)
        return getLancheImgById(req, res);
    // else if (params.nome)
    //     return getUsersByNome(req, res);
    // else if (params.titulo)
    //     return getReceitaByTitulo(req, res);
});

export default router;