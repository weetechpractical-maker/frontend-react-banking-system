import { Box, Chip, Stack, Typography } from "@mui/material";
import TotalBalanceIcon from "./assets/TotalBalanceIcon";

function CustomBox() {
  return (
    <Stack
      sx={{
        p: "24px",
        border: "1px solid var(--gray-200)",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px 0px #0000001A",
        maxWidth: "360px",
        gap: "16px",
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ color: "var(--gray-500)" }}>Total Balance</Typography>
        <Chip
          icon={<TotalBalanceIcon />}
          label=""
          sx={{
            backgroundColor: "#dbeafe",
            width: 40,
            height: 40,
            borderRadius: "50%",

            "& .MuiChip-label": {
              display: "none",
            },

            "& .MuiChip-icon": {
              margin: 0,
              fontSize: "20px",
            },
          }}
        />
      </Stack>

      <Stack sx={{ gap: "8px" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: 700, color: "var(--gray-800)" }}>$4,250.00</Typography>
        <Typography sx={{ color: "var(--gray-500)" }}>Updated 5 mins ago</Typography>
      </Stack>
    </Stack>
  );
}

export default CustomBox;
