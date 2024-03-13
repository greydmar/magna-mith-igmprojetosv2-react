import { Box } from "@mui/system";
import { colors } from "@theme/colors";

export const CellIndicator = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          borderBottom: `2px solid ${colors?.primary?.main}`,
          borderRight: `2px solid ${colors?.primary?.main}`,
          width: "6px",
          height: "6px",
          right: 0,
          bottom: 0,
        }}
      />
    </>
  );
};
