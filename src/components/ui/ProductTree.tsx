import { Box, Card, CardContent, Typography } from "@mui/material";
import { RichTreeView, type TreeViewBaseItem } from "@mui/x-tree-view";

type Color = "blue" | "green";

type ExtendedTreeItemProps = { color?: Color; id: String; label: string };
const products: TreeViewBaseItem<ExtendedTreeItemProps>[] = [
  {
    id: "1",
    label: "Website",
    children: [
      { id: "1.1", label: "Home", color: "green" },
      { id: "1.2", label: "Pricing", color: "green" },
      { id: "1.3", label: "About us", color: "green" },
      {
        id: "1.4",
        label: "Blog",
        children: [
          { id: "1.1.1", label: "Announcements", color: "blue" },
          { id: "1.1.2", label: "April lookahead", color: "blue" },
          { id: "1.1.3", label: "What's new", color: "blue" },
          { id: "1.1.4", label: "Meet the team", color: "blue" },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Store",
    children: [
      { id: "2.1", label: "All products", color: "green" },
      {
        id: "2.2",
        label: "Categories",
        children: [
          { id: "2.2.1", label: "Gadgets", color: "blue" },
          { id: "2.2.2", label: "Phones", color: "blue" },
          { id: "2.2.3", label: "Wearables", color: "blue" },
        ],
      },
      { id: "2.3", label: "Bestsellers", color: "green" },
      { id: "2.4", label: "Sales", color: "green" },
    ],
  },
  { id: "4", label: "Contact", color: "blue" },
  { id: "5", label: "Help", color: "blue" },
];

function DotIcon({ color }: { color: string }) {
  return (
    <Box>
      <svg>
        <circle cx={3} />
      </svg>
    </Box>
  );
}

const ProductTree = () => {
  return (
    <Card
      variant="outlined"
      sx={{ width: "100%", bgcolor: "background.default" }}
    >
      {" "}
      <CardContent>
        {" "}
        <Typography variant="body1" gutterBottom>
          Product Tree
        </Typography>
        <RichTreeView
          items={products}
          multiSelect
          aria-label="pages"
          defaultExpandedItems={["1", "1.1"]}
          defaultSelectedItems={["1.1", "1.1.1"]}
        />
      </CardContent>
    </Card>
  );
};

export default ProductTree;
