import { MenuItem } from "@material-ui/core";
import React from "react";
import CustomSelect from "@Components/Custom/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreedImage, fetchBreeds } from "@Store/actions/dog";
import { RootState } from "@Store/reducers";
import { useForm, Controller } from "react-hook-form";
import CustomButton from "@Components/Custom/CButton";
import CBox from "@Components/Custom/CBox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  breed: string | null;
};

const defaultValues = {
  breed: "",
};

const BreedSelector = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: FormValues) => {
    dispatch(fetchBreedImage(data.breed!.toString()));
  };

  const schema = yup.object().shape({
    breed: yup.string().required("Debes introducir una raza."),
  });

  React.useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  const dogState = useSelector((state: RootState) => state.dogs);

  const { handleSubmit, errors, control } = useForm<FormValues>({
    defaultValues,
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  return (
    <CBox py="2rem">
      <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Controller
          control={control}
          name="breed"
          rules={{ required: true }}
          render={({ onChange, onBlur, value }) => (
            <CustomSelect
              icon={() => null}
              color="primary"
              required
              displayEmpty={true}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              fullWidth
              errors={errors.breed?.message}
              id="breed"
            >
              <MenuItem selected key={0} value={""}>
                Introduce un valor
              </MenuItem>
              {dogState.races.length > 0 &&
                dogState.races.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </CustomSelect>
          )}
        ></Controller>
        <CBox py="2rem">
          <CustomButton
            size="large"
            color="primary"
            fullWidth
            type="submit"
            textcolor="white"
            variant="contained"
            onClick={() => null}
          >
            Ver imágenes
          </CustomButton>
        </CBox>
      </form>
    </CBox>
  );
};

export default BreedSelector;
