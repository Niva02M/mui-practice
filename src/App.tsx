import { alpha, Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { theme } from "./theme/Theme";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainGrid from "./components/MainGrid";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
            marginLeft: { md: 28 },
          })}
        >
          <Stack
            spacing={2}
            sx={{ alignItems: "center", mx: 3, pb: 5, mt: { xs: 8, md: 2 } }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
