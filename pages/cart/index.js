import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin-top: 40px;
  padding: 30px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

export default function CartPage() {
  return (
    <>
      <Header />
      <Center>
        <ColumnWrapper>
          <Box>1</Box>
          <Box>
            <h2>Order Information</h2>
            <Button block  black >Continue to Payment</Button>
          </Box>
        </ColumnWrapper>
      </Center>
    </>
  );
}
