import {
  InputAdornment,
  makeStyles,
  SelectProps,
  SvgIconProps,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import React, { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    background: "white",
    borderRadius: 4,
  },
  margin: {
    width: "100%",
    margin: theme.spacing(1),
  },
  icon: {
    // We use a position absolute over a flexbox in order to forward the pointer events
    // to the input.
    position: "absolute",
    right: 0,
    top: "calc(25% - 12px)", // Center vertically
    color: theme.palette.action.active,
    "pointer-events": "none", // Don't block pointer events on the select under the icon.
  },
}));

type OwnProps = {
  icon?: React.FunctionComponent<SvgIconProps>;
  id: string;
  errors?: string;
} & TextFieldProps &
  SelectProps;

const CustomSelect: React.FC<OwnProps> = (props) => {
  const {
    id,
    errors,
    icon: Icon,
    label,
    displayEmpty,
    children,
    ...rest
  } = props;
  const classes = useStyles();

  const myRef = useRef(null);

  return (
    <div className={classes.root}>
      <TextField
        id={id}
        select
        label={label}
        helperText={errors && errors}
        error={!!errors}
        SelectProps={{
          displayEmpty,
          ref: myRef,
          /*IconComponent: () => {
              return (
                <Wrapper className={classes.icon}>
                  <DropDownArrow width={24} height={24} />
                </Wrapper>
              ) as React.ReactElement
            },*/
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {Icon ? <Icon /> : null}
            </InputAdornment>
          ),
        }}
        {...rest}
      >
        {children}
      </TextField>
    </div>
  );
};

export default React.memo(CustomSelect);
