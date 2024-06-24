import { CellIndicator } from '@components/cellIndicator/cellIndicator';
import { Rating } from '@components/rating/rating';
import { Box, Typography } from '@mui/material';
import { Stack, useMediaQuery } from '@mui/system';
import { useThemeMode } from '@store/useThemeMode';
import { colors } from '@theme/colors';
import { useFormContext } from 'react-hook-form';
import { Questionario } from '@models';
import { PropsQuestion } from './@types';
import { QuestionCell } from './questionCell';
import { useIndice } from '@context/indices';
import { useSetupOpCalculoFator } from '@hooks/useSetupOpCalculoFator';

export const Question: React.FC<PropsQuestion> = ({ question, index }) => {
  const { themeMode } = useThemeMode();
  const isDark = themeMode == 'dark';
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const { setIndice } = useIndice();
  const formContext = useFormContext<{ form: Questionario }>();
  const { setValue } = useFormContext<{ form: Questionario }>();

  const opCalculoFator = useSetupOpCalculoFator();

  const handleSetValue = (value: number) => {
    setValue(`form.questoes.${index}.rating`, value);

    const form = formContext.getValues().form;
    opCalculoFator.enviarRecalculo(form);
  };

  opCalculoFator.processarRespostaRecalculo((qResposta: Questionario) => {
    const qForm = formContext.getValues().form;
    for (let updIndex = 0; updIndex < qResposta.questoes.length; updIndex++) {
      const qAtual = qResposta.questoes[updIndex];
      const qLocal = qForm.questoes[updIndex];

      if (qLocal.id != qAtual.id) continue;

      if (qLocal.versao == qAtual.versao) continue;

      setValue(
        `form.questoes.${updIndex}.textoJustificativa`,
        qAtual.textoJustificativa,
      );
      setValue(`form.questoes.${updIndex}.rating`, qAtual.rating);
    }

    setIndice(qResposta.ratingCalculado ?? 0);
  });

  return (
    <>
      <QuestionCell width={isSmallScreen ? undefined : '70%'}>
        <Box
          bgcolor={isDark ? colors?.darkMode?.light : undefined}
          height={'100%'}
        >
          <Stack
            direction={isSmallScreen ? 'column-reverse' : 'row'}
            height={'100%'}
            gap={4}
            alignItems={'center'}
            paddingLeft={2}
            padding={isSmallScreen ? 3 : 0}
            marginX={isSmallScreen ? 0 : 3}
          >
            <Box
              bgcolor={
                isSmallScreen
                  ? undefined
                  : isDark
                  ? 'inherit'
                  : colors.customBlue.light
              }
              sx={{ position: 'relative' }}
            >
              {!isSmallScreen && <CellIndicator />}
              <Box paddingY={0.3} paddingX={1.5}>
                <Rating
                  setFormValue={handleSetValue}
                  rating={question?.rating}
                />
              </Box>
            </Box>
            <Box>
              <Typography component={'span'}>{question?.texto}</Typography>
            </Box>
          </Stack>
        </Box>
      </QuestionCell>
    </>
  );
};
