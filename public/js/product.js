const onSubmitHandler = (event) => {
  event.preventDefault();
  const product = event.target.productName.value;
  const obj = {
    productName: product,
  };
  axios.post("http://localhost:3000" + "/product", obj).then((result) => {
    console.log("return value post request: " + result.data.value);
  });
};
