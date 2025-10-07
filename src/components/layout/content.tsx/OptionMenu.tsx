import { LogoutOutlined, MoreVertRounded } from "@mui/icons-material";
import MenuButton from "../../ui/MenuButton";
import { useState } from "react";
import {
  Divider,
  dividerClasses,
  listClasses,
  ListItemIcon,
  listItemIconClasses,
  ListItemText,
  Menu,
  MenuItem,
  paperClasses,
} from "@mui/material";
import styled from "@emotion/styled";

const MuiMenuItem = styled(MenuItem)({
  margin: "2px 0",
});
const OptionMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuButton aria-label="Open menu" onClick={handleClick}>
        <MoreVertRounded />
      </MenuButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: "4px",
            backgroundColor: "background.default",
            borderRadius: 0,
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: "4px -4px",
          },
        }}
      >
        <MuiMenuItem onClick={handleClose}>Profile</MuiMenuItem>
        <MuiMenuItem onClick={handleClose}>My Account</MuiMenuItem>

        <Divider />
        <MuiMenuItem onClick={handleClose}>Add Another Account</MuiMenuItem>

        <MuiMenuItem onClick={handleClose}>Settings</MuiMenuItem>
        <Divider />
        <MuiMenuItem
          onClick={handleClose}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: "auto",
              minWidth: 0,
            },
          }}
        >
          <ListItemText>Logout</ListItemText>
          <ListItemIcon>
            <LogoutOutlined fontSize="small" />
          </ListItemIcon>
        </MuiMenuItem>
      </Menu>
    </>
  );
};

export default OptionMenu;
