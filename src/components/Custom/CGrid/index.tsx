import { Grid } from "@material-ui/core";
import styled from "styled-components";

const _Grid = styled(Grid)<{
  backgroundcolor?: string;
}>`
  background-color: ${(props) => props.backgroundcolor};
`;

export default _Grid;
