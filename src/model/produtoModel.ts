import { pool } from './../config/database'; [cite: 7]

export interface Produto { [cite: 8]
    id?: number; [cite: 9]
    nome: string; [cite: 10]
    preco: number; [cite: 13]
} [cite: 15]

export class ProdutoModel { [cite: 18]

    async getAll(): Promise<Produto[]> { [cite: 23]
        const [rows] = await pool.query('SELECT * FROM produtos'); [cite: 24]
        return rows as Produto[]; [cite: 25]
    } [cite: 28]

    async create(produto: Produto): Promise<void> { [cite: 31]
        await pool.query('INSERT INTO produtos (nome, preco) VALUES (?,?)', 
        [produto.nome, produto.preco]); [cite: 34]
    } [cite: 36]

    async update(id: number, produto: Produto): Promise<void> { [cite: 39]
        await pool.query('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', 
        [produto.nome, produto.preco, id]); [cite: 42]
    } [cite: 44]

    async delete(id: number): Promise<void> { [cite: 47]
        await pool.query('DELETE FROM produtos WHERE id = ?', [id]); [cite: 49]
    } [cite: 50]
}