import { db } from '../database/db.js';

export const getJantar = (_, res) => {
    const sql = "select * from receitas where idCategoria = 4";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das jantar obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getJantarImgs = (_, res) => {
    const sql = "select * from receitas where idCategoria = 4";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das jantar obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getJantarsById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from receitas where id = ? and idCategoria = 4";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das jantar obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getJantarImgById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from receitas where id = ? where idCategoria = 4";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das jantar obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}