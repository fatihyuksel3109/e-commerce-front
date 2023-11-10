import styled from "styled-components";
import Button from "./Button";
import { CartIcon } from "@/public/icons/icons";

const ProductWrapper = styled.div`
  padding: 10px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 120px;
    max-height: 80px;
  }
`;

const Title = styled.h2`
  font-weigth: normal;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const ProductInfoCard = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
`;

function ProductCard({ _id, description, price, productName, images }) {
  return (
    <ProductWrapper>
      <Card>
        <img src={images[0]} alt="product-image" />
      </Card>

      <ProductInfoCard>
        <Title>{productName}</Title>
        <PriceRow>
          <div>${price}</div>
          <Button primary={1}>
            <CartIcon />
          </Button>
        </PriceRow>
      </ProductInfoCard>
    </ProductWrapper>
  );
}

export default ProductCard;
