import { Box, Button, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { StyledAuthTextField, StyledButton } from "./Styled";
import {
  END_POINTS,
  NO_UPPER_CASE,
  PASSWORD_REGEX,
  PASSWORD_REGEX_MESSAGE,
  requiredFieldMessage,
  VALID_EMAIL,
} from "./authConstants";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../src/redux/api/authApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { resetAuthState } from "../src/redux/slice/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (!user && error) {
      toast.error(error);
      dispatch(resetAuthState());
      return;
    }

    if (user) {
      toast.success("Login Successful");
      if (isAuthenticated) {
        navigate(`${END_POINTS.DASHBOARD}`);
        return;
      }
    }
  }, [user, error, isAuthenticated]);

  return (
    <Stack
      sx={{
        p: "32px",
        backgroundColor: "var(--white)",
        border: "1px solid var(--gray-200)",
        borderRadius: "12px",
        gap: "32px",
        boxShadow: "0px 10px 15px 0px #0000001A",
        width: "50%",
        alignItems: "center",
      }}
    >
      <Stack sx={{ alignItems: "center" }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 700, color: "var(--gray-800)" }}>Welcome Back</Typography>
        <Typography sx={{ color: "var(--gray-600)", fontWeight: 400 }}>Sign in to access your account</Typography>
      </Stack>

      <Box component="form" noValidate sx={{ width: "90%" }} onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{ gap: "24px" }}>
          <Stack sx={{ gap: "4px" }}>
            <InputLabel sx={{ fontWeight: 500, fontSize: "14px", color: "var(--gray-700)" }}>Email</InputLabel>
            <StyledAuthTextField
              type="email"
              size="small"
              placeholder="you@example.com"
              {...register("email", {
                required: requiredFieldMessage("email"),
                validate: {
                  noUppercase: (value) => !NO_UPPER_CASE.test(value) || "Uppercase letters not allowed",

                  validEmail: (value) => VALID_EMAIL.test(value) || "Invalid email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
          </Stack>

          <Stack sx={{ gap: "4px" }}>
            <InputLabel sx={{ fontWeight: 500, fontSize: "14px", color: "var(--gray-700)" }}>Password</InputLabel>
            <StyledAuthTextField
              type="password"
              size="small"
              placeholder="••••••••"
              {...register("password", {
                required: requiredFieldMessage("password"),
                pattern: {
                  value: PASSWORD_REGEX,
                  message: PASSWORD_REGEX_MESSAGE,
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
            />
            <Button
              disableRipple
              variant="text"
              sx={{
                alignSelf: "flex-end",
                padding: 0,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Forget Password?
            </Button>
          </Stack>

          <Stack>
            <StyledButton variant="contained" type="submit">
              Login
            </StyledButton>
            <Typography sx={{ textAlign: "center", color: "var(--gray-600)" }}>
              Don't have an account?
              <Button
                disableRipple
                sx={{
                  minWidth: "auto",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                Sign up
              </Button>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
export default LoginPage;
