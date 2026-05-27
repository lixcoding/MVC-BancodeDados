import { Request, Response } from "express";
import { ProdutoModel } from "./../models/produtoModel";

const produtoModel = new ProdutoModel();

export const getProdutos = async (req: Request, res: Response) => {
    try {
        const produtos = await produtoModel.getAll();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos', error });
    }
};

export const createProduto = async (req: Request, res: Response) => {
    try {
        const { nome, preco } = req.body;
        await produtoModel.create({ nome, preco });
        res.status(201).json({ message: 'Produto criado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar produto' });
    }
};

export const updateProduto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nome, preco } = req.body;
        await produtoModel.update(Number(id), { nome, preco });
        res.json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto' });
    }
};

export const deleteProduto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await produtoModel.delete(Number(id));
        res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar produto' });
    }
};