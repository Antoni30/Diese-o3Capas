async function dataConectionApi () {
  const product = await fetch("https://fakestoreapi.com/products");
  const items = await product.json();
  return items;
};

module.exports = dataConectionApi;