import express from 'express';
import cors from 'cors'; 
import produtoRoutes from './routes/produtoRoutes';
import { pool } from './config/database';
import path from 'path';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors()); // <-- 2. ADICIONE ESSA LINHA (Sempre antes das rotas)

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
}); 

app.use('/api', produtoRoutes);

pool.getConnection()
    .then(() => { 
        console.log('Conectado ao MYSQL'); 
        app.listen(PORT, () => { 
            console.log(`Servidor rodando em http://localhost:${PORT}`); 
        });
    }) 
    .catch((error: any) => {
        console.error('Erro ao conectar ao MYSQL', error);
    });