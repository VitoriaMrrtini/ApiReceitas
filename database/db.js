import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

/*export const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "lv_receitas"
}); */

export const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
});

db.connect((err) => {
    if(err){
        console.log(`Erro de conexão com o banco de dados: ${err}`);
        return;
    }

    console.log(`Conexão bem-sucedida com o banco de dados MySQL.`);
});