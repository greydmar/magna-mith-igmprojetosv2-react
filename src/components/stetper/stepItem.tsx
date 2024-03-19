import { IconStep } from "@components/iconStep";
import { Step, StepLabel } from "@mui/material";

type Props = {
  index: number;
  label: string;
  size: number;
};
export const StepItem: React.FC<Props> = ({ index, label, size }) => {

   if(size > 6 && index + 1 !== size && index > 5) return null

  return (
    <Step active={index == 0}>
      <StepLabel StepIconComponent={IconStep} icon={index + 1} >
        {label}
      </StepLabel>
    </Step>
  );
};
