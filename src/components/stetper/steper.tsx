import { Stepper } from '@mui/material';
import { Stack, useMediaQuery } from '@mui/system';
import { useSteper } from './hook/useSteper';
import { StepItem } from './stepItem';

export const Steper = () => {
  const isSmallScreen = useMediaQuery('(max-width:800px)');

  const { steps } = useSteper();

  return (
    <Stack
      sx={{ width: '100%' }}
      marginBottom={8}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stepper
        activeStep={0}
        orientation={isSmallScreen ? 'vertical' : 'horizontal'}
      >
        {steps.map((step, index) => (
          <StepItem
            key={step.id}
            indice={step}
            index={index}
            size={steps.length}
            label={step.descricao ?? ''}
          />
        ))}
      </Stepper>
    </Stack>
  );
};
