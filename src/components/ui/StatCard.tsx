import { areaElementClasses, SparkLineChart } from "@mui/x-charts";
import { theme } from "../../theme/Theme";
import { Box, Card, Chip, Stack, Typography } from "@mui/material";

export type StatCardProps = {
  title: string;
  value: string;
  interval: string;
  trend: "up" | "down" | "neutral";
  data: number[];
};

const getDaysInMonth = (month: number, year: number) => {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
};
const StatCard = ({ title, value, interval, trend, data }: StatCardProps) => {
  const daysInWeek = getDaysInMonth(4, 2024);

  const trendColors = {
    up: theme.palette.success.main,
    down: theme.palette.error.main,
    neutral: theme.palette.grey[700],
  };

  const labelColors = {
    up: "success" as const,
    down: "error" as const,
    neutral: "default" as const,
  };

  const color = labelColors[trend];
  const chartColor = trendColors[trend];
  const trendValues = { up: "+25%", down: "-25%", neutral: "+10%" };
  return (
    <Card variant="outlined" sx={{ bgcolor: "background.default", p: 2 }}>
      {" "}
      <Typography variant="body1" gutterBottom>
        {title}
      </Typography>
      <Stack
        direction="column"
        sx={{ justifyContent: "space-between", flexGrow: 1, gap: 1 }}
      >
        {" "}
        <Stack sx={{ justifyContent: "space-between" }}>
          {" "}
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h2" gutterBottom>
              {value}
            </Typography>
            <Chip size="small" color={color} label={trendValues[trend]} />
          </Stack>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {interval}
          </Typography>
        </Stack>
        <Box sx={{ width: "100%", height: 50 }}>
          <SparkLineChart
            color={chartColor}
            data={data}
            area
            showHighlight
            showTooltip
            xAxis={{ scaleType: "band", data: daysInWeek }}
            sx={{
              [`& .${areaElementClasses.root}`]: {
                fill: `${chartColor}1A`,
              },
            }}
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default StatCard;
