import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Stack } from "@mui/material";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon fontSize="small" /> },
  { text: "Analytics", icon: <AnalyticsRoundedIcon fontSize="small" /> },
  { text: "Clients", icon: <PeopleRoundedIcon fontSize="small" /> },
  { text: "Tasks", icon: <AssignmentRoundedIcon fontSize="small" /> },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon fontSize="small" /> },
  { text: "About", icon: <InfoRoundedIcon fontSize="small" /> },
  { text: "Feedback", icon: <HelpRoundedIcon fontSize="small" /> },
];
const DrawerList = () => {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default DrawerList;
