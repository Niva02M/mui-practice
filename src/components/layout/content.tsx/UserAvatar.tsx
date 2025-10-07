import { Avatar, Box, Stack, Typography } from "@mui/material";
import avatar from "../../../assets/avatar.png";
import OptionMenu from "./OptionMenu";

const UserAvatar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        p: 2,
        gap: 1,
        alignItems: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Avatar
        sizes="small"
        alt="Riley Carter"
        src={avatar}
        sx={{ width: 36, height: 36 }}
      />
      <Box sx={{ mr: "auto" }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, lineHeight: "16px" }}
        >
          Niva Maharjan
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          niva@email.com
        </Typography>
      </Box>
      <OptionMenu />
    </Stack>
  );
};

export default UserAvatar;
