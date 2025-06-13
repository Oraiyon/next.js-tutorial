type Props = {
  params: Promise<{ productId: string }>;
};

const ProductDetails = async ({ params }: Props) => {
  const { productId } = await params;

  return <h1>Details about {productId}</h1>;
};

export default ProductDetails;
