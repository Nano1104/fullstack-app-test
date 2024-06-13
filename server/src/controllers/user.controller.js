import Product from "../models/products.model.js";

export const changePrice = async (req, res) => {
    try {   
        const productsChangedPrice = await Product.updateMany({}, { $mul: { price: 1.2 } });
        
        res.status(200).json({message: "Success changing price", productsChangedPrice})
    } catch (err) {
        res.status(404).json({message: "Error changing price", err})
    }
}