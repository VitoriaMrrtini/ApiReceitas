import express from 'express';
import { getCafeTardeImgById, getCafeTardeImgs } from '../controllers/cafeTardeControllers.js';

const router = express.Router();

router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getCafeTardeImgs(req, res);

    if (params.id)
        return getCafeTardeImgById(req, res);
    // else if (params.nome)
    //     return getUsersByNome(req, res);
    // else if (params.titulo)
    //     return getReceitaByTitulo(req, res);
});

export default router;