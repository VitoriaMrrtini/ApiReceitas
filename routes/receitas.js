import express from 'express';
import { getReceitasImgById, getReceitasImgs, searchReceitas } from '../controllers/receitaController.js';

const router = express.Router();

router.get("/", (req, res) => {
    const params = req.query;

    if (Object.keys(params).length === 0)
        return getReceitasImgs(req, res);

    if (params.id)
        return getReceitasImgById(req, res);
    
    if (params.search)
        return searchReceitas(req, res);
});

export default router;
