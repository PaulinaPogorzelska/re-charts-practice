import Box, { boxSystem } from "../Box";
import styled from "styled-components/macro";

const Card = styled(Box)`
  ${boxSystem};
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export default Card;
