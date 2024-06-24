import { ProgressBar } from '@components/progressBar';
import { Questiontable } from '@components/questiontable';
import { Steper } from '@components/stetper';
import { useIndice } from '@context/indices';
import { formatNumber } from '@libs/formatNumber';
import { Button, CircularProgress, Typography } from '@mui/material';
import { Box, Stack, useMediaQuery } from '@mui/system';
import { useThemeMode } from '@store/useThemeMode';
import { colors } from '@theme/colors';
import { FormProvider, useForm } from 'react-hook-form';
import { Indice, Questionario } from 'src/types';
import { usePageIndices } from './hooks/usePageIndices';
import { ModalLanguage } from './modals/modal';
import { ModalError } from './modals/modalError';
import { useEffect, useState } from 'react';
import { ModalSuccess } from './modals/modalSuccess';

export const PageIndice = () => {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const { themeMode } = useThemeMode();
  const isDark = themeMode == 'dark';
  const { indice, objIndice } = useIndice();

  const methods = useForm<{ form: Questionario }>();
  const form = methods.watch();

  const {
    openLanguage,
    setOpenLanguage,
    openError,
    setOpenError,
    handleOnSubmit,
    success,
    isLoading,
    isLoadingIndices,
  } = usePageIndices({ methods: methods });

  const calculateProgessbar = ({ form }: { form: Questionario }) => {
    if (!form?.questoes) return 0;

    // Desconsiderando 0 estrelas "NA"
    const formQuestionsLength = form?.questoes?.filter(
      (questao) => questao?.rating && questao?.rating > 0,
    ).length;

    // Considerar como FEITO entre 3 à 5 estrelas. Neste caso deverá considerar na barra de progresso.
    const filterAnsweredQuestions = form?.questoes?.filter((questao) => {
      if (questao.rating && questao.rating >= 3) {
        return questao;
      }
    });

    const answeredQuestions = filterAnsweredQuestions.length;
    const result = (answeredQuestions / formQuestionsLength) * 100;

    if (Number.isNaN(result)) {
      return 0;
    }

    return Number(result);
  };

  useEffect(() => {
    if (success) {
      setSuccessModalOpen(true);
    }
  }, [success]);

  const getIndiceName = (objIndice: Indice | undefined | null) => {
    if (!objIndice) return '';
    // descricao exemplo: IGF - L (Lançamentos)
    const splitDescription = objIndice?.descricao?.split('(');
    if (Array.isArray(splitDescription)) {
      const descriptionWithoutParentheses = splitDescription[1].substring(
        0,
        splitDescription[1].length - 1,
      );

      return descriptionWithoutParentheses;
    }
    return '';
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => handleOnSubmit(data))}>
          <Steper />
          <Box paddingX={3}>
            <Typography variant="h5" fontWeight={'bold'} marginBottom={1}>
              Resultado Final do Check-list de{' '}
              <Typography
                variant="h5"
                fontWeight={'bold'}
                component={'span'}
                color={'primary.main'}
              >
                {getIndiceName(objIndice)}
              </Typography>{' '}
              que compõe o IGF
            </Typography>
            <Typography variant="subtitle1">
              IGF = Índice de Gestão Financeira
            </Typography>

            <Box marginY={2} marginTop={3}>
              {isLoadingIndices() ? (
                <Stack justifyContent="center" alignItems="center" padding={4}>
                  <CircularProgress />
                </Stack>
              ) : (
                <Questiontable>
                  <ProgressBar
                    value={calculateProgessbar(form)}
                    label={`Progresso ${objIndice?.descricao}`}
                  />
                </Questiontable>
              )}
            </Box>
          </Box>
          {objIndice && (
            <Box paddingRight={3} paddingLeft={isSmallScreen ? 3 : 0}>
              <Box
                bgcolor={colors.customBlue.main}
                paddingY={2}
                display="flex"
                flexDirection="row"
              >
                <Typography
                  component={'span'}
                  variant="h5"
                  fontWeight={'bold'}
                  marginLeft={6}
                  display="flex"
                  flexDirection="row"
                >
                  Índice {objIndice?.descricao}
                </Typography>
                <Typography
                  component={'span'}
                  variant="h5"
                  fontWeight={'bold'}
                  marginLeft={8}
                >
                  {formatNumber(indice)}
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingX={3} marginTop={3} marginBottom={12}>
            <Stack
              direction={isSmallScreen ? 'column-reverse' : 'row'}
              gap={isSmallScreen ? 6 : 0}
              alignItems={'flex-start'}
            >
              <Box flexGrow={1}>
                <Typography
                  component={'span'}
                  variant="body1"
                  fontWeight={'bold'}
                >
                  Forma de avaliação
                </Typography>

                <Typography>
                  1 - Será atribuída a classificação "Não se aplica" (0
                  estrelas) (*), sendo obrigatório apresentar uma justificativa.
                </Typography>
                <Typography>
                  2 - Será atribuída a classificação "Não atendeu" (1 a 2
                  estrelas) (*, **), sendo obrigatório apresentar uma
                  justificativa.
                </Typography>
                <Typography>
                  3 - Será atribuída a classificação "Atendeu parcialmente" (3 a
                  4 estrelas) (***, ****), sendo obrigatório apresentar uma
                  justificativa.
                </Typography>
                <Typography>
                  4 - Será atribuída a classificação "Atendeu" (5 estrelas)
                  (*****), e não é necessário fornecer uma justificativa.
                </Typography>
              </Box>
              <>
                {isLoading() ? (
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    width={isSmallScreen ? '100%' : '30%'}
                    padding={4}
                  >
                    <CircularProgress />
                  </Stack>
                ) : (
                  <>
                    {!success ? (
                      <Box
                        width={isSmallScreen ? '100%' : '30%'}
                        bgcolor={colors.customBlue.main}
                      >
                        <Button
                          fullWidth
                          sx={{
                            padding: 3,
                            fontSize: 18,
                            textTransform: 'none',
                            color: isDark
                              ? colors?.primary?.contrastText
                              : undefined,
                          }}
                          type="submit"
                        >
                          Enviar Avaliação
                        </Button>
                      </Box>
                    ) : null}
                  </>
                )}
              </>
            </Stack>
          </Box>
        </form>
      </FormProvider>
      <ModalLanguage open={openLanguage} setOpen={setOpenLanguage} />
      <ModalError open={openError} setOpen={setOpenError} />
      <ModalSuccess
        open={isSuccessModalOpen}
        setOpen={setSuccessModalOpen}
        indice={objIndice!}
      />
    </>
  );
};
