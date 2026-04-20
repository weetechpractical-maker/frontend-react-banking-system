import { Button, Stack, Typography } from "@mui/material";
import FintrackLogo from "./assets/fintrackLogo";
import DashboardLogo from "./assets/DashboardLogo";
import { useDispatch } from "react-redux";
import { resetAuthState } from "./redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { END_POINTS } from "./authConstants";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetAuthState());
    navigate(`${END_POINTS.LOGIN}`);
  };
  return (
    <Stack
      sx={{
        width: "256px",
        height: "100vh",
        border: "1px solid var(--gray-200)",
        boxShadow: "0px 4px 6px 0px #0000001A",
        gap: "12px",
      }}
    >
      <Stack direction="row" sx={{ padding: "24px", gap: "8px", alignItems: "center" }}>
        <FintrackLogo />
        <Typography sx={{ color: "var(--royal-blue)", fontWeight: 700, fontSize: "24px" }}>Fin Track</Typography>
      </Stack>
      <Stack sx={{ flex: 1, p: "24px" }}>
        <Button
          sx={{
            textTransform: "none",
            gap: "16px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <DashboardLogo />
          <Typography sx={{ color: "var(--gray-700)" }}>Dashboard</Typography>
        </Button>
      </Stack>
      <Stack sx={{ p: "24px", alignItems: "center" }}>
        <Stack
          sx={{
            p: "24px",
            backgroundColor: "var(--gray-100)",
            borderRadius: "8px",
            gap: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--gray-700)",
            }}
          >
            Sarah Johnson
          </Typography>

          <Button
            sx={{
              textTransform: "none",
              alignSelf: "flex-start",
              backgroundColor: "var(--blue-100)",
              color: "var(--blue-600)",
              borderRadius: "999px",
              px: "16px",
              py: "6px",
              gap: "8px",
              "&:hover": {
                backgroundColor: "var(--blue-200)",
              },
            }}
          >
            Edit Profile
          </Button>
        </Stack>
        <Button
          onClick={handleLogout}
          sx={{
            textTransform: "none",
            color: "red",
            textDecoration: "underline",
            justifyContent: "flex-start",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};
export default Sidebar;
