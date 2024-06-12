import Product from "../models/products.model.js";

export const getProducts = async (req, res) => {
    try {   
        const products = await Product.find({})
        console.log(products)
        res.status(200).json({message: "Success getting products", products})
    } catch (err) {
        res.status(404).json({message: "Error getting products", err})
    }
}

export const getProduct = async (req, res) => {
    try {   
        const productFound = await Product.findOne({ _id: req.params.id })
        res.status(200).json({message: "Success getting product", productFound})
    } catch (err) {
        res.status(404).json({message: "Error getting product", err})
    }
}

export const createProduct = async (req, res) => {
    const newProduct = new Product({ ...req.body })
    try {   
        await newProduct.save();
        res.status(200).json({message: "Success creating product", newProduct})
    } catch (err) {
        res.status(404).json({message: "Error creating product", err})
    }
}