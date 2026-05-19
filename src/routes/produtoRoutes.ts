import { Router } from "express"; [cite: 108]
import { 
    getProdutos, 
    createProduto, 
    updateProduto, 
    deleteProduto 
} from "./../controllers/produtoController"; [cite: 108]

const router = Router(); [cite: 108]

router.get('/produtos', getProdutos); [cite: 108]
router.post('/produtos', createProduto); [cite: 108]
router.put('/produtos/:id', updateProduto); [cite: 108]
router.delete('/produtos/:id', deleteProduto); [cite: 108]

export default router; [cite: 108]