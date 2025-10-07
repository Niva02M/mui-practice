import { ChevronRightRounded, InsightsRounded } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";

const HighLightedCard = () => {
  return (
    <Card sx={{ height: "100%", bgcolor: "background.default" }}>
      <CardContent>
        <InsightsRounded />
        <Typography variant="h3" gutterBottom>
          Explore your data
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: "8px" }}>
          Uncover performance and visitor insights with our data wizardry.
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRightRounded />}
          sx={{
            textTransform: "none",
            width: {
              xs: "100%",
              sm: "auto",
            },
            ":hover": {
              color: "text.primary",
            },
          }}
        >
          Get Insights
        </Button>
      </CardContent>
    </Card>
  );
};

export default HighLightedCard;
