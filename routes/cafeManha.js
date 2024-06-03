import express from 'express';
import { getCafeManhaImgById, getCafeManhaImgs } from '../controllers/cafeManhaControllers.js';

const router = express.Router();

router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getCafeManhaImgs(req, res);

    if (params.id)
        return getCafeManhaImgById(req, res);
    // else if (params.nome)
    //     return getUsersByNome(req, res);
    // else if (params.titulo)
    //     return getReceitaByTitulo(req, res);
});

export default router;