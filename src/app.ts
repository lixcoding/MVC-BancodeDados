import express from 'express'; [cite: 118]
import produtoRoutes from './routes/produtoRoutes'; [cite: 120]
import { pool } from './config/database'; [cite: 122]
import path from 'path'; [cite: 123]

const PORT = 3000; [cite: 125]
const app = express(); [cite: 128]

app.use(express.json()); [cite: 130]
app.use(express.static(path.join(__dirname, 'views'))); [cite: 134]

// Rota para servir a página principal
app.get('/', (req, res) => { [cite: 137]
    res.sendFile(path.join(__dirname, 'view', 'index.html')); [cite: 139]
}); [cite: 141]

app.use('/api', produtoRoutes); [cite: 145]

// Conexão com o Banco de Dados e Inicialização do Servidor
pool.getConnection() [cite: 148]
    .then(() => { [cite: 150]
        console.log('Conectado ao MYSQL'); [cite: 154]
        app.listen(PORT, () => { [cite: 155]
            console.log(`Servidor rodando em http://localhost:${PORT}`); [cite: 157]
        }); [cite: 159]
    }) [cite: 161]
    .catch((error: any) => { [cite: 163]
        console.error('Erro ao conectar ao MYSQL', error); [cite: 165]
    }); [cite: 167]