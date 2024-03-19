import { ProgressBar } from "@components/progressBar";
import { Questiontable } from "@components/questiontable";
import { Steper } from "@components/stetper";
import { useIndice } from "@context/indices";
import { formatNumber } from "@libs/formatNumber";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box, Stack, useMediaQuery } from "@mui/system";
import { useThemeMode } from "@store/useThemeMode";
import { colors } from "@theme/colors";
import { FormProvider, useForm } from "react-hook-form";
import { FormQuestion } from "src/types";
import { usePageIndices } from "./hooks/usePageIndices";
import { ModalLanguage } from "./modals/modal";
import { ModalError } from "./modals/modalError";

export const PageIndice = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const { themeMode } = useThemeMode();
  const isDark = themeMode == "dark";
  const { indice } = useIndice();

  const methods = useForm<{ form: FormQuestion }>();

  const {
    openLanguage,
    setOpenLanguage,
    openError,
    setOpenError,
    handleOnSubmit,
    success,
    isLoading,
    isLoadingGet,
  } = usePageIndices({ methods: methods });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => handleOnSubmit(data))}>
          <Steper />
          <Box paddingX={3}>
            <Typography variant="h5" fontWeight={"bold"} marginBottom={1}>
              Resultado Final do Check-list de{" "}
              <Typography
                variant="h5"
                fontWeight={"bold"}
                component={"span"}
                color={"primary.main"}
              >
                Custo
              </Typography>{" "}
              que compõe o IGF
            </Typography>
            <Typography variant="subtitle1">
              IGF = Índice de Gestão Financeira
            </Typography>

            <Box marginY={2} marginTop={3}>
              {isLoadingGet() ? (
                <Stack justifyContent="center" alignItems="center" padding={4}>
                  <CircularProgress />
                </Stack>
              ) : (
                <Questiontable>
                  <ProgressBar
                    value={indice * 100}
                    label="Progresso IGF (Custo)"
                  />
                </Questiontable>
              )}
            </Box>
          </Box>
          <Box paddingRight={3} paddingLeft={isSmallScreen ? 3 : 0}>
            <Box bgcolor={colors.customBlue.main} paddingY={2}>
              <Typography
                component={"span"}
                variant="h5"
                fontWeight={"bold"}
                marginLeft={6}
              >
                Índice IGF - C
              </Typography>
              <Typography
                component={"span"}
                variant="h5"
                fontWeight={"bold"}
                marginLeft={8}
              >
                {formatNumber(indice)}
              </Typography>
            </Box>
          </Box>
          <Box paddingX={3} marginTop={3} marginBottom={12}>
            <Stack
              direction={isSmallScreen ? "column-reverse" : "row"}
              gap={isSmallScreen ? 6 : 0}
              alignItems={"flex-start"}
            >
              <Box flexGrow={1}>
                <Typography
                  component={"span"}
                  variant="body1"
                  fontWeight={"bold"}
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
                    width={isSmallScreen ? "100%" : "30%"}
                    padding={4}
                  >
                    <CircularProgress />
                  </Stack>
                ) : (
                  <>
                    {!success ? (
                      <Box
                        width={isSmallScreen ? "100%" : "30%"}
                        bgcolor={colors.customBlue.main}
                      >
                        <Button
                          fullWidth
                          sx={{
                            padding: 3,
                            fontSize: 18,
                            textTransform: "none",
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
    </>
  );
};
