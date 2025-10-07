import {
  Badge,
  badgeClasses,
  IconButton,
  type IconButtonProps,
} from "@mui/material";

export interface MenuButtonProps extends IconButtonProps {
  showBadge?: boolean;
}
const MenuButton = ({ showBadge = false, ...props }: MenuButtonProps) => {
  return (
    <Badge
      color="error"
      variant="dot"
      invisible={!showBadge}
      sx={{
        [`& .${badgeClasses.badge}`]: { right: 2, top: 2 },
        color: "text.disabled",
        border: "1px solid ",
        borderRadius: "8px",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          color: "text.primary",
        },
        ...(props.sx || {}),
      }}
    >
      <IconButton
        size="small"
        {...props}
        sx={{
          transition: "all 0.2s ease-in-out",
          borderRadius: "8px",

          "&:hover": {
            backgroundColor: "background.default",
          },
          ...(props.sx || {}),
        }}
      />
    </Badge>
  );
};

export default MenuButton;
