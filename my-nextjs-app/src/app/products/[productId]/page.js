const DynamicProductPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h1>This is dybnamic Product Page {params.productId}</h1>
    </div>
  );
};

export default DynamicProductPage;
