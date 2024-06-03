import { db } from '../database/db.js';

export const getAlmoco = (_, res) => {
    const sql = "select * from receitas where idCategoria = 1";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das almoco obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getAlmocoImgs = (_, res) => {
    const sql = "select * from receitas where idCategoria = 1";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das almoco obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getAlmocosById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from receitas where id = ? and idCategoria = 1";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das almoco obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getAlmocoImgById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from receitas where id = ? where idCategoria = 1";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das almoco obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}