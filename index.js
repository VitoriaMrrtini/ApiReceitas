import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js'
import receitaRoutes from './routes/receitas.js'
import docesRoutes from './routes/doces.js'
import almocoRoutes from './routes/almoco.js'
import cafeTardeRoutes from './routes/cafeTarde.js'
import cafeManhaRoutes from './routes/cafeManha.js'
import jantarRoutes from './routes/jantar.js'
import lancheRoutes from './routes/lanche.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/receitas", receitaRoutes);
app.use("/doces", docesRoutes);
app.use("/almoco", almocoRoutes);
app.use("/cafeTarde", cafeTardeRoutes);
app.use("/cafeManha", cafeManhaRoutes);
app.use("/jantar", jantarRoutes);
app.use("/lanche", lancheRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});