import {
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CustomPageHeader from "./CustomPageHeaders";
import ImportTransactionIcon from "./assets/ImportTransactionIcon";
import AddTransactionIcon from "../src/assets/AddTransactionIcon";
import CustomBox from "./CustomBox";
import { data } from "./authConstants";
import EditButtonIcon from "./assets/EditButtonIcon";
import DeleteTransactionIcon from "./assets/DeletetransactionIcon";

const Dashboard = () => {
  return (
    <Stack sx={{ height: "100%", gap: "28px" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <CustomPageHeader heading="Welcome, Sarah" subHeading="Here's your transaction overview" />
        <Stack direction="row" sx={{ gap: "15px" }}>
          <Button sx={{ py: "12px", px: "16px", border: "1px solid var(--gray-300)", borderRadius: "8px", gap: "8px" }}>
            <ImportTransactionIcon />
            <Typography sx={{ color: "var(--gray-600)" }}>Import Transactions</Typography>
          </Button>
          <Button
            sx={{
              py: "12px",
              px: "16px",
              border: "1px solid var(--gray-300)",
              borderRadius: "8px",
              gap: "8px",
              backgroundColor: "var(--royal-blue)",
              color: "var(--gray-200)",
            }}
          >
            <AddTransactionIcon />
            <Typography>Add Transactions</Typography>
          </Button>
        </Stack>
      </Stack>

      <CustomBox />

      <Stack sx={{ p: "24px", border: "1px solid var(--gray-200)", borderRadius: "8px", flex: 1, gap: "24px" }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ color: "var(--gray-800)", fontWeight: 700, fontSize: "20px" }}>
            Recent Transactions
          </Typography>
          <Stack direction="row" sx={{ gap: "12px" }}>
            <TextField
              size="small"
              placeholder="Search transactions..."
              sx={{
                width: "300px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                },
              }}
            />

            <FormControl size="small">
              <Select
                defaultValue=""
                displayEmpty
                sx={{
                  minWidth: "140px",
                  borderRadius: "6px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--gray-300)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--gray-300)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--gray-300)",
                  },
                }}
              >
                <MenuItem value="">All Types</MenuItem>
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="expense">Expense</MenuItem>
                <MenuItem value="saving">Saving</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <Stack sx={{ flex: 1, justifyContent: "space-between" }}>
          <TableContainer component={Paper} sx={{ borderRadius: "12px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Chip
                        label={row.type}
                        sx={{
                          backgroundColor:
                            row.type === "Credit"
                              ? "var(--green-100)"
                              : row.type === "Debit"
                                ? "var(--red-100)"
                                : "var(--blue-100)",
                          color:
                            row.type === "Credit"
                              ? "var(--green-600)"
                              : row.type === "Debit"
                                ? "var(--red-600)"
                                : "var(--blue-600)",
                          fontWeight: 500,
                          borderRadius: "16px",
                        }}
                      />
                    </TableCell>

                    <TableCell>
                      <Stack>
                        <Typography fontWeight={500}>{row.title}</Typography>
                        <Typography fontSize="12px">{row.subtitle}</Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>{row.date}</TableCell>

                    <TableCell
                      sx={{
                        color: row.amount.includes("+") ? "var(--green-600)" : "var(--red-600)",
                        fontWeight: 500,
                      }}
                    >
                      {row.amount}
                    </TableCell>

                    <TableCell sx={{ fontWeight: 500 }}>{row.balance}</TableCell>

                    <TableCell>
                      <IconButton>
                        <EditButtonIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteTransactionIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{
              px: 2,
              py: 1.5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize="14px" sx={{ color: "var(--gray-500)" }}>
              Showing 3 of 24 transactions
            </Typography>

            <Stack direction="row" sx={{ alignItems: "center", gap: "8px" }}>
              <Pagination
                count={3}
                page={1}
                shape="rounded"
                siblingCount={0}
                boundaryCount={1}
                sx={{
                  "& .MuiPaginationItem-root": {
                    borderRadius: "6px",
                    minWidth: "32px",
                    height: "32px",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "var(--royal-blue) !important",
                    color: "var(--white)",
                  },
                }}
              />

              <IconButton size="small"></IconButton>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Dashboard;
