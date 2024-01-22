import  dataConectionApi  from "../../../database/conectionApi.js";

export const getProducts = async(req,res)=>{
    const products = await dataConectionApi();
    res.send(products)
}
export const postProduct = (req,res)=>{
    console.log(req.body)
}

