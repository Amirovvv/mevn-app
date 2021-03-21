import {
    Router
} from 'express'
import Product from '../models/Product.js'

const router = Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        return res.status(200).json(products)
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
})

router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json({
        state: 'success'
    });
})

router.get('/:id', async (req, res) => {
    res.json(await Product.findById(req.params.id));
});

export default router