import { Stack, Typography } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { END_POINTS } from "../src/authConstants";
import LoginImage from "./assets/loginImage";
import LoginFinSecureIcon from "./assets/loginFinSecureIcon";

const AuthLayout = () => {
  const location = useLocation();
  return (
    <Stack direction="row" sx={{ height: "100vh" }}>
      <Stack
        sx={{
          width: "40%",
          height: "100%",
          backgroundColor: "var(--royal-blue)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {location.pathname === END_POINTS.SIGNUP ? (
          <Stack>SIGNUP</Stack>
        ) : (
          <Stack sx={{ gap: "32px", alignItems: "center" }}>
            <LoginImage />

            <Stack sx={{ gap: "5px", alignItems: "center" }}>
              <Stack direction="row" sx={{ gap: "8px" }}>
                <LoginFinSecureIcon />
                <Typography sx={{ color: "var(--white)", fontWeight: 700, fontSize: "24px" }}>FinSecure</Typography>
              </Stack>
              <Typography sx={{ color: "var(--soft-ice-blue)", fontSize: "18px" }}>Your Money, Simplified.</Typography>
            </Stack>
          </Stack>
        )}
      </Stack>

      <Stack sx={{ flex: 1, backgroundColor: "var(--off-white)", justifyContent: "center", alignItems: "center" }}>
        <Outlet />
      </Stack>
    </Stack>
  );
};
export default AuthLayout;
