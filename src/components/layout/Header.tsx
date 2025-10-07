import { Stack } from "@mui/material";
import NavBreadCrumb from "./content.tsx/NavBreadCrumb";
import Search from "./content.tsx/Search";
import CustomDatePicker from "./content.tsx/CustomDatePicker";
import MenuButton from "../ui/MenuButton";
import { NotificationsRounded } from "@mui/icons-material";

const Header = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavBreadCrumb />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRounded fontSize="small" />
        </MenuButton>
      </Stack>
    </Stack>
  );
};

export default Header;
