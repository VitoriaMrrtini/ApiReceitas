import { db } from '../database/db.js';

export const getDoces = (_, res) => {
    const sql = "select * from receitas where idCategoria = 6";

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

export const getDocesImgs = (_, res) => {
    const sql = "select * from receitas where idCategoria = 6";

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

export const getDocesById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from receitas where id = ? and idCategoria = 6";

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

export const getDoceImgById = (req, res) => {
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

export const getIngredientes = (_, res) => {
    const sql = "select * from ingredientes";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados dos ingredientes obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getIngredientesById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from ingredientes where doce_id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados dos ingredientes obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getInstrucoes = (_, res) => {
    const sql = "select * from instrucoes";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das instruções obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getInstrucoesById = (req, res) => {
    const { id } = req.query;
    
    const sql = "select * from instrucoes where doce_id = ?";

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados das instruções obtidas com sucesso.");
            return res.status(200).json(data);
        }
    });
}
   