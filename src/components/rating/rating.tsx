import { Rating as RatingMui, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { PropsRating } from "./@types";

export const Rating: React.FC<PropsRating> = ({ setFormValue, rating }) => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (rating) {
      setValue(rating);
    }
  }, []);

  return (
    <>
      <RatingMui
        name="simple-controlled"
        value={value}
        onChange={(_, newValue) => {
          setFormValue && setFormValue(newValue);
          setValue(newValue);
        }}
        sx={{
          paddingX: 0,
          marginX: 0,
          alignItems: "center",
          display: "flex",

          fontSize: isSmallScreen ? 40 : undefined,
        }}
      />
    </>
  );
};
