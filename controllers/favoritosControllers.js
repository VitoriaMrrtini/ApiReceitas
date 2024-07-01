import { db } from '../database/db.js';

export const getFavoritosByUsuario = async (req, res, next) => {
    const { usuario_id } = req.query;

    try {
        const sql = "SELECT receitas.* FROM favoritos JOIN receitas ON favoritos.receita_id = receitas.id WHERE favoritos.usuario_id = ?";
        db.query(sql, [usuario_id], (err, data) => {
            if (err) {
                console.error("Erro ao buscar favoritos:", err);
                return res.status(500).json({ message: "Erro ao buscar favoritos" });
            }
            res.status(200).json(data);
        });
    } catch (err) {
        next(err);
    }
};

export const addFavorito = async (req, res, next) => {
    const { usuario_id, receita_id } = req.body;

    try {
        const sql = "INSERT INTO favoritos (usuario_id, receita_id) VALUES (?, ?)";
        db.query(sql, [usuario_id, receita_id], (err, data) => {
            if (err) {
                console.error("Erro ao adicionar favorito:", err);
                return res.status(500).json({ message: "Erro ao adicionar favorito" });
            }
            res.status(201).json({ message: "Favorito adicionado com sucesso" });
        });
    } catch (err) {
        next(err);
    }
};

export const removeFavorito = async (req, res, next) => {
    const { usuario_id, receita_id } = req.body;

    try {
        const sql = "DELETE FROM favoritos WHERE usuario_id = ? AND receita_id = ?";
        db.query(sql, [usuario_id, receita_id], (err, data) => {
            if (err) {
                console.error("Erro ao remover favorito:", err);
                return res.status(500).json({ message: "Erro ao remover favorito" });
            }
            res.status(200).json({ message: "Favorito removido com sucesso" });
        });
    } catch (err) {
        next(err);
    }
};
