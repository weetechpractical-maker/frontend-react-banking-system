import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const StyledAuthTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        '& fieldset': {
            borderColor: 'var(--gray-300)',
        },
        '&:hover fieldset': {
            borderColor: 'var(--gray-300)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'var(--gray-300)',
        },
    },
}))

export const StyledButton = styled(Button)(() => ({
    textTransform: "none",
    backgroundColor: "var(--royal-blue)",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius:"8px"
}))