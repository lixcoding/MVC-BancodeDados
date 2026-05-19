import { Request, Response } from "express"; [cite: 58]
import { ProdutoModel } from "./../models/produtoModel"; [cite: 62]

const produtoModel = new ProdutoModel(); [cite: 65]

export const getProdutos = async (req: Request, res: Response) => { [cite: 68]
    try { [cite: 70]
        const produtos = await produtoModel.getAll(); [cite: 72]
        res.json(produtos); [cite: 74]
    } catch (error) { [cite: 76]
        res.status(500).json({ message: 'Erro ao buscar produtos', error }); [cite: 78]
    } [cite: 80]
}; [cite: 83]

export const createProduto = async (req: Request, res: Response) => { [cite: 85, 86]
    try { [cite: 88]
        const { nome, preco } = req.body; [cite: 90]
        await produtoModel.create({ nome, preco }); [cite: 92]
        res.status(201).json({ message: 'Produto criado com sucesso' }); [cite: 94]
    } catch (error) { [cite: 97]
        res.status(500).json({ message: 'Erro ao criar produto' }); [cite: 99]
    } [cite: 102]
};

export const updateProduto = async (req: Request, res: Response) => { [cite: 59]
    try {
        const { id } = req.params;
        const { nome, preco } = req.body;
        await produtoModel.update(Number(id), { nome, preco });
        res.json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto' });
    }
};

export const deleteProduto = async (req: Request, res: Response) => { [cite: 59]
    try {
        const { id } = req.params;
        await produtoModel.delete(Number(id));
        res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar produto' });
    }
};