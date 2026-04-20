import { Stack, Typography } from "@mui/material";

function CustomPageHeader({ heading, subHeading }) {
  return (
    <Stack>
      <Typography sx={{ color: "var(--gray-800)", fontWeight: 700, fontSize: "24px" }}>{heading}</Typography>
      <Typography sx={{ color: "var(--gray-600)" }}>{subHeading}</Typography>
    </Stack>
  );
}

export default CustomPageHeader;
