import styled from "styled-components/macro";
import {
  compose,
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system";

export const boxSystem = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
);

const Box = styled.div`
  ${boxSystem};
  box-sizing: border-box;
`;

Box.defaultProps = {
  color: "text",
  fontFamily: "body",
  lineHeight: "1.6",
};

export default Box;
