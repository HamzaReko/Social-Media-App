import { grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode, // 'light' or 'dark'
    ...(mode === "light"
      ? {
          ali: {
            main: grey[300],
          },
          favColor: {
            main:"rgb(247,247,247)",
          },
        }
      : {
          ali: {
            main: grey[800],
          },
          favColor: {
            main: "rgb(22,22,22)",
          },
        }),
  },
});
export default getDesignTokens;
