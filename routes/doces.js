import express from 'express';
import { getDoceImgById, getDocesImgs } from '../controllers/docesController.js'

const router = express.Router();

router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getDocesImgs(req, res);

    if (params.id)
        return getDoceImgById(req, res);
    // else if (params.nome)
    //     return getUsersByNome(req, res);
    // else if (params.titulo)
    //     return getReceitaByTitulo(req, res);
});

export default router;