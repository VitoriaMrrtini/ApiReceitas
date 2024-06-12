import { db } from '../database/db.js';

export const getUsers = (_, res) => {
    const sql = "select * from usuario";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados dos usuários obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getUsersById = (req, res) => {
    const sql = "select * from usuario where id = ?";

    const {id} = req.query;

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getUsersByNome = (req, res) => {
    const sql = "select * from usuario where nome = ?";

    const {nome} = req.query;

    db.query(sql, [nome], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getUsersBySenha = (req, res) => {
    const sql = "select * from usuario where senha like ?";

    const {senha} = req.query;

    db.query(sql, [senha], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}
export const getUsersByEmail = (req, res) => {
    const sql = "select * from usuario where email like ?";

    const {email} = req.query;

    db.query(sql, [email], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}
export const getUsersByidade = (req, res) => {
    const sql = "select * from usuario where idade like ?";

    const {idade} = req.query;

    db.query(sql, [idade], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso.");
            return res.status(200).json(data);
        }
    });
}
export const getUsersBygenero = (req, res) => {
    const sql = "select * from usuario where genero like ?";

    const {genero} = req.query;

    db.query(sql, [genero], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Dados obtidos com sucesso."); 
            return res.status(200).json(data);
        }
    });
}

export const addUser = (req, res) => {
    const sql = "insert into usuario (nome, senha, email, idade, genero) values (?, ?, ?, ?, ?)";

    const {nome, senha, email, idade, genero} = req.body;

    db.query(sql, [nome, senha, email, idade, genero], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        }else{
            console.log("Usuário cadastrado com sucesso.");
            return res.status(201).json(data);
        }
    });
}


export const updateUser = (req, res) => {
    const sql = "update usuario set nome = ?, senha = ?, email = ?, idade = ?, genero = ? where id = ?";

    const { id, nome, senha, email, idade, genero } = req.body;

    db.query(sql, [nome, senha, email, idade, genero, id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Dados do usuário atualizados com sucesso.");
            return res.status(201).json(data);
        }
    });
}

export const deleteUser = (req, res) => {
    const sql = "delete from usuario where id = ?";

    const { id } = req.body;

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição.");
            return res.status(500).json(err);
        } else {
            console.log("Usuário removido com sucesso.");
            return res.status(201).json(data);
        }
    });
}

export const verificarcadastro = (req, res) => {

    const {nome, senha, email, idade, genero} = req.body;
    
    db.query('SELECT * FROM usuario WHERE email = ?', [email], async(error, results) => {
        if(error) {
            console.error('Erro ao consultar o banco de dados: ', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
        
        if (results.length > 0) {
            console.error('o Email ja foi cadastrado, não entrou no BD');
            return res.status(400).json({ message: 'Email já cadastrado' });
        }
    
        const sql = "insert into usuario (nome, senha, email, idade, genero) values (?, ?, ?, ?, ?)";

        db.query(sql, [nome, senha, email, idade, genero], (err, data) => {
            if(err){
                console.log("Erro ao processar a requisição.");
                return res.status(500).json(err);
            }else{
                console.log("Usuário cadastrado com sucesso.");
                return res.status(201).json(data);
            }
        });
    });
}