import express from 'express';
import { getReceitasImgById, getReceitasImgs } from '../controllers/receitaController.js';

const router = express.Router();

router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getReceitasImgs(req, res);

    if (params.id)
        return getReceitasImgById(req, res);
    // else if (params.nome)
    //     return getUsersByNome(req, res);
    // else if (params.titulo)
    //     return getReceitaByTitulo(req, res);
});

export default router;