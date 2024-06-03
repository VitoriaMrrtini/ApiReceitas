import { db } from '../database/db.js';

export const getReceitas = (_, res) => {
    const sql = "select * from receitas";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das receitas obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getReceitasImgs = (_, res) => {
    const sql = "select * from receitas";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das receitas obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getReceitassById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from receitas where id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das receitas obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getReceitasImgById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from receitas where id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das receitas obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}