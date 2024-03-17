import { IconStep } from "@components/iconStep";
import { steps } from "@data/steps";
import { Step, StepLabel, Stepper } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/system";

export const Steper = () => {
    const isSmallScreen = useMediaQuery("(max-width:800px)");
  return (
    <Stack
      sx={{ width: "100%" }}
      marginBottom={8}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stepper activeStep={0} orientation={isSmallScreen ?  "vertical" : "horizontal"}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={IconStep} icon={index + 1}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};
