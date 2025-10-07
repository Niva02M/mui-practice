import Drawer from "@mui/material/Drawer";
import DrawerList from "./content.tsx/DrawerList";
import { Box, Divider, Typography } from "@mui/material";
import CardAlert from "./content.tsx/CardAlert";
import UserAvatar from "./content.tsx/UserAvatar";

export default function Sidebar() {
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            width: "14rem",
          }}
        >
          <Box
            sx={{
              p: 1.5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography>MUI Practice</Typography>
          </Box>
          <Divider />

          <DrawerList />
          <CardAlert />
        </Box>
        <UserAvatar />
      </Drawer>
    </div>
  );
}
