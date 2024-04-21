const Products = require("../models/productsModel");

// getAllProducts
const getAllProducts = async (req, res) => {
  try {
    const productsData = await Products.find();
    res.status(200).json({
      message: "All Products",
      success: true,
      data: productsData,
    });
  } catch (error) {
    res.status(404).json({ msesage: error.msesage });
  }
};

// singleProduct
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productsData = await Products.findOne({ id: id });
    res.status(200).json({
      message: "Single Product",
      success: true,
      data: productsData,
    });
    // console.log(data)
  } catch (error) {
    res.status(404).json({ msesage: error.msesage });
  }
};

// createProduct
const createProdcut = async (req, res) => {
  try {
    const {
      id,
      title,
      description,
      price,
      images,
      brand,
      stock,
      category,
      rating,
    } = req.body;
    const newProduct = new Products({
      id,
      title,
      description,
      price,
      images,
      brand,
      stock,
      category,
      rating,
    });
    // console.log(newProduct)
    const productsData = await newProduct.save();
    res.status(200).json({
      message: "Product is created",
      success: true,
      data: productsData,
    });
  } catch (error) {
    res.status(404).json({ msesage: error.msesage });
  }
};

// update product 
const updateProduct = async(req, res)=>{
    try {
        const id = req.params.id;
        const {title, description, price, images, category, brand, rating, stock} = req.body;
        const productsData = await Products.findByIdAndUpdate({_id:id});
        productsData.title = title;
        productsData.description = description;
        productsData.price = price;
        productsData.images = images;
        productsData.category = category;
        productsData.brand = brand;
        productsData.rating = rating;
        productsData.stock = stock;

        await productsData.save();
        res.status(200).json({
            message : "This product is updated",
            success : true, 
            data : productsData
        })
        
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

// delete product 
const deleteProduct = async(req, res)=>{
    try {
        const id = req.params.id;
        const productsData = await Products.findByIdAndDelete({_id:id})
        res.status(200).json({
            message : "Delete Product",
            success : true,
            data : productsData
        })
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

module.exports = { getAllProducts, getProduct, createProdcut, updateProduct, deleteProduct};
