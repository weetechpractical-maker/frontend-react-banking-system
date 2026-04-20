export const END_POINTS = {
    SIGNUP: "signup",
    LOGIN: "login",
    DASHBOARD: "dashboard"
}

export const SERVER_END_POINTS = {
    USERS: "users",
    TRANSACTION: "transaction",
    EDIT_PROFILE: "edit-profile",
}

export const NO_UPPER_CASE = /[A-Z]/;
export const VALID_EMAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
export const PASSWORD_REGEX_MESSAGE =
    "Password must be at least 8 characters long and include uppercase, lowercase, and a special character";
export const requiredFieldMessage = (fieldName) => `${fieldName} is required`;

// Local Storage
export const isAuthenticated = "isAuthenticated"

export const data = [
    {
        type: "Credit",
        title: "Salary Deposit",
        subtitle: "ABC Company",
        date: "Jun 30, 2023",
        amount: "+$1,500.00",
        balance: "$4,250.00",
    },
    {
        type: "Debit",
        title: "Rent Payment",
        subtitle: "Landlord Inc.",
        date: "Jun 28, 2023",
        amount: "-$800.00",
        balance: "$200.00",
    },
    {
        type: "Transfer",
        title: "Money Transfer",
        subtitle: "Sarah Johnson",
        date: "Jun 25, 2023",
        amount: "-$150.00",
        balance: "$95.00",
    },
];