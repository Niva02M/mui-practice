import { Button, Card, CardContent, Typography } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const CardAlert = () => {
  return (
    <Card variant="outlined" sx={{ m: 1.5, flexShrink: 0 }}>
      <CardContent>
        <AutoAwesomeRoundedIcon fontSize="small" />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          Plan about to expire
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          Enjoy 10% off when renewing your plan
        </Typography>
        <Button
          variant="contained"
          size="small"
          fullWidth
          sx={{
            textTransform: "none",
            ":hover": {
              color: "text.primary",
            },
          }}
        >
          Get the discount
        </Button>
      </CardContent>
    </Card>
  );
};
export default CardAlert;
