import { Card, CardContent, Typography } from "@mui/material";
import {
  BrazilFlag,
  GlobeFlag,
  IndiaFlag,
  UsaFlag,
} from "../../data/CustomIcons";
import { PieChart } from "@mui/x-charts";

const data = [
  { label: "India", value: 50000 },
  { label: "USA", value: 35000 },
  { label: "Brazil", value: 10000 },
  { label: "Other", value: 5000 },
];

// const countries = [
//   {
//     name: "India",
//     value: 50,
//     flag: <IndiaFlag />,
//     color: "hsl(220, 25%, 65%)",
//   },
//   {
//     name: "USA",
//     value: 35,
//     flag: <UsaFlag />,
//     color: "hsl(220, 25%, 45%)",
//   },
//   {
//     name: "Brazil",
//     value: 10,
//     flag: <BrazilFlag />,
//     color: "hsl(220, 25%, 30%)",
//   },
//   {
//     name: "Other",
//     value: 5,
//     flag: <GlobeFlag />,
//     color: "hsl(220, 25%, 20%)",
//   },
// ];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: false,
};
const UserPieChart = () => {
  return (
    <Card
      variant="outlined"
      sx={{ width: "100%", bgcolor: "background.default" }}
    >
      {" "}
      <CardContent>
        {" "}
        <Typography variant="body1" gutterBottom>
          Users by Country{" "}
        </Typography>
        <PieChart
          series={[
            { innerRadius: 50, outerRadius: 100, data, arcLabel: "value" },
          ]}
          {...settings}
        />
      </CardContent>
    </Card>
  );
};

export default UserPieChart;
