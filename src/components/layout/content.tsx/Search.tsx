import { SearchOutlined } from "@mui/icons-material";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";

const Search = () => {
  return (
    <div>
      <FormControl
        sx={{ width: { xs: "100%", md: "25ch" } }}
        variant="outlined"
      >
        <OutlinedInput
          size="small"
          id="search"
          placeholder="Search ..."
          sx={{ flexGrow: 1 }}
          startAdornment={
            <InputAdornment position="start" sx={{ color: "text.secondary" }}>
              {" "}
              <SearchOutlined fontSize="small" />
            </InputAdornment>
          }
          inputProps={{ "aria-label": "search" }}
        />
      </FormControl>
    </div>
  );
};

export default Search;
