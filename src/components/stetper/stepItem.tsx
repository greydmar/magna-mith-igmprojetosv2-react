import { IconStep } from '@components/iconStep';
import { useIndice } from '@context/indices';
import { Indice } from '@models';
import { ButtonBase, Step, StepLabel } from '@mui/material';

type Props = {
  index: number;
  label: string;
  size: number;
  indice: Indice;
};
export const StepItem: React.FC<Props> = ({ index, label, size, indice }) => {
  const { objIndice, setObjIndice } = useIndice();

  if (size > 6 && index + 1 !== size && index > 5) return null;

  return (
    <ButtonBase onClick={() => setObjIndice(indice)}>
      <Step active={indice.id === objIndice?.id}>
        <StepLabel StepIconComponent={IconStep} icon={index + 1}>
          {label}
        </StepLabel>
      </Step>
    </ButtonBase>
  );
};
