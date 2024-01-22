import express from "express";
import morgan from "morgan";
import cors from "cors";
import product from "./routes/product.routes.js"

const app = express();
const PORT = process.env.PORT || 2024;


app.use(morgan("combined"));
app.use(cors())
app.use(express.json())



app.get("/", (req, res) => {
  res.send("This is our server: Antoni,Christian,Camila");
});
app.use("/api",product)



app.listen(PORT, () => {
  console.log(`Server listen: http://localhost:${PORT}`);
});
