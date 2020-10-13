import { Typography } from "@material-ui/core";
import styled from "styled-components";
import theme from "@Utils/theme";

const _Typography = styled(Typography)<{
  color?: string;
}>`
  color: ${(props) => props.color ?? theme.palette.text.primary};
`;

export default _Typography;
