import Box, { boxSystem } from "../Box";
import styled from "styled-components/macro";

const Card = styled(Box)`
  ${boxSystem};
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
`;

export default Card;
