import express from 'express';
import { adminOnly } from '../middlewares/auth.js';
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getSingleProducts, getlatestProducts, newProduct, updateProduct } from '../controllers/products.js';
import { singleUpload } from '../middlewares/multer.js';

const app = express.Router();

//  Create a new product - /api/v1/product/new
app.post("/new", adminOnly,singleUpload, newProduct);

// To Get All Products with Filter - /api/v1/product/all
app.get("/all", getAllProducts);

//  To Get last 10 Product - /api/v1/product/getlatestProducts
app.get("/latest", getlatestProducts);

//  To Get all unique Product - /api/v1/product/getAllCategories
app.get("/categories", getAllCategories);

//  To Get all Products - /api/v1/product/getAdminProducts
app.get("/admin-products", adminOnly,getAdminProducts);

//  To Get, update, delete Products
app
.route("/:id")
.get(getSingleProducts)
.put(adminOnly, singleUpload, updateProduct)
.delete(adminOnly, deleteProduct);



export default app;