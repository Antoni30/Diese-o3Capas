import { Router } from "express";
import { getProducts,postProduct } from "../controllers/products.controller.js";

const route = Router();

route.get("/product",getProducts)
route.post("/product",postProduct)


export default route;