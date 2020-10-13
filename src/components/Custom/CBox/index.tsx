import { Box } from "@material-ui/core";
import styled from "styled-components";

const _Box = styled(Box)<{
  backgroundcolor?: string;
}>`
  background-color: ${(props) => props.backgroundcolor};
`;

export default _Box;
