import styled from "styled-components";
import Center from "./Center";
import ProductCard from "./ProductCard";

const ProductsGrid = styled.div`
  display: grid;
  gap: 30px;
  padding-top: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;


  @media (max-width: 1069px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 735px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 534px) {
    grid-template-columns: 1fr;
  }
`;

const Title  = styled.h2`
  font-size: 2rem;
  margin-top: 20px;
`

export default function NewProducts({ products }) {

  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
      </ProductsGrid>
    </Center>
  );
}
