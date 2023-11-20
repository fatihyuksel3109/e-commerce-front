import styled from "styled-components";
import Button from "./Button";
import { CartIcon } from "@/public/icons/icons";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
  padding: 10px;
`;

const Card = styled(Link)`
  background-color: #fff;
  padding: 10px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 160px;
    max-height: 100px;
    border-radius: 5px;
  }
`;

const Title = styled(Link)`
  display: block;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const ProductInfoCard = styled.div`
  margin-top: 4px;
`;

const PriceRow = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.4rem;
`;

function ProductCard({ _id, description, price, productName, images }) {
  const { addProduct } = useContext(CartContext);

  const url = "/product/" + _id;

  return (
    <ProductWrapper>
      <Card href={url}>
        <img src={images[0]} alt="product-image" />
      </Card>

      <ProductInfoCard>
        <Title href={url}>{productName}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button onClick={() => addProduct(_id)} primary={1}>
            <CartIcon />
          </Button>
        </PriceRow>
      </ProductInfoCard>
    </ProductWrapper>
  );
}

export default ProductCard;
