import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import Carrito from "./Carrito";

function Productos() {
  const [products, setProducts] = useState([]);
  const [elements,setElements]=useState([]);
  useEffect(() => {
    const fetchData = async ()=>{
        try {
            const response = await fetch('http://localhost:2024/api/product');
            const result = await response.json();
            
            setProducts(result);
          } catch (error) {
            console.log(error)
          }
    }
    fetchData();

  }, [elements]);
  const addElements =(element)=>{
      const updatedElements=[...elements,element];
      setElements(updatedElements);
  }
  return (
    <div id="Productos" className="flex flex-col items-center">
    <h1 className=" text-6xl text-blue-950 mb-4">Productos</h1>
     <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      {
        products.map((element)=>{
            return <CardProduct key={element.id} name={element.title} price={element.price} url={element.image} addElement={addElements}/>
        })
      }
    </div>
    <Carrito elements={elements}/>
    </div>
   
  );
}

export default Productos;