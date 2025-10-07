import { CalendarTodayRounded } from "@mui/icons-material";
import { Button, useForkRef } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  useParsedFormat,
  usePickerContext,
  useSplitFieldProps,
  type DatePickerFieldProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface ButtonFieldProps extends DatePickerFieldProps {}
const ButtonField = (props: ButtonFieldProps) => {
  const { forwardedProps } = useSplitFieldProps(props, "date");
  const pickerContext = usePickerContext();
  const handleRef = useForkRef(pickerContext.triggerRef, pickerContext.rootRef);
  const parsedFormat = useParsedFormat();
  const valueStr =
    pickerContext.value == null
      ? parsedFormat
      : pickerContext.value.format(pickerContext.fieldFormat);
  return (
    <Button
      {...forwardedProps}
      variant="outlined"
      ref={handleRef}
      startIcon={<CalendarTodayRounded fontSize="small" />}
      sx={{
        minWidth: "fit-content",
        backgroundColor: "background.default",
        color: "text.secondary",
        borderColor: "text.disabled",
        ":hover": {
          color: "text.primary",
          borderColor: "text.primary",
        },
      }}
      onClick={() => pickerContext.setOpen((prev) => !prev)}
    >
      {pickerContext.label ?? valueStr}
    </Button>
  );
};

const CustomDatePicker = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          label={value == null ? null : value.format("MMM DD, YYYY")}
          onChange={(newValue) => setValue(newValue)}
          slots={{ field: ButtonField }}
          sx={{
            minWidth: "fit-content",
          }}
          slotProps={{
            nextIconButton: { size: "small" },
            previousIconButton: { size: "small" },
            layout: {
              sx: {
                color: "text.primary",
                border: ".25px solid ",
                borderRadius: "12px",
                backgroundColor: "background.default",
              },
            },
          }}
          views={["day", "month", "year"]}
        />{" "}
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
