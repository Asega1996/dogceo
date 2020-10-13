import { Button, ButtonProps } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

type OwnProps = {
  variant?: "outlined" | "contained" | "text";
  minwidth?: number | string;
  maxwidth?: number | string;
  width?: number | string;
  textcolor?: string;
  onClick: () => void;
} & ButtonProps;

const CustomButton: React.FC<OwnProps> = ({
  variant,
  minwidth,
  maxwidth,
  width,
  onClick,
  ...props
}) => {
  return (
    <SCCustomButton
      variant={variant}
      onClick={onClick}
      minwidth={minwidth}
      maxwidth={maxwidth}
      width={width}
      {...props}
    >
      {props.children}
    </SCCustomButton>
  );
};

CustomButton.defaultProps = {
  variant: "contained",
};

type CustomizedButtonType = {
  minwidth: string;
  maxwidth: string;
  width: string;
  color: string;
  textcolor: string;
};
const SCCustomButton = styled(Button).attrs(
  ({ minwidth, maxwidth, width, color, textcolor }: CustomizedButtonType) => ({
    minwidth,
    maxwidth,
    width,
    color,
    textcolor,
  })
)`
  border-radius: 2.5em !important;
  text-transform: none;
  min-width: ${({ minwidth }) => minwidth};
  max-width: ${({ maxwidth }) => maxwidth};
  width: ${({ width }) => width};
  background-color: ${({ color }) => color};
  height: 3.5em;
  color: ${({ textcolor }) => textcolor};
`;

export default CustomButton;
