import {
  CssBaseline,
  Divider,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "./styles/MyTheme";
import Appbar from "./comp/appbar";
import ListComp from "./comp/list";
import Posts from "./comp/posts";
import Box3 from "./comp/box3";
import { Add } from "@mui/icons-material";
import AddPost from "./comp/addPost";

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <AddPost />
        <Appbar toggleDrawer={toggleDrawer} />

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          direction={"row"}
        >
          <ListComp
            theme={theme}
            setmyMOde={setmyMOde}
            toggleDrawer={toggleDrawer}
            open={open}
          />
          <Posts theme={theme} />
          <Box3 theme={theme} />
        </Stack>
      </>
    </ThemeProvider>
  );
}

export default App;
