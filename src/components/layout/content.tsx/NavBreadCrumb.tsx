import { NavigateNextRounded } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";

const NavBreadCrumb = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumbs"
      separator={<NavigateNextRounded fontSize="small" />}
    >
      <Typography variant="body1">Dashboard</Typography>{" "}
      <Typography
        variant="body1"
        sx={{ color: "text.primary", fontWeight: 600 }}
      >
        Home
      </Typography>
    </Breadcrumbs>
  );
};

export default NavBreadCrumb;
