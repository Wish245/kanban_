export const validateLogin = (email, password) => {
    email = email?.trim();
    password = password?.trim();

    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format");
    }

    if (password.length < 8 || password.length > 20) {
        throw new Error("Password must be 8–20 characters long");
    }

    if (!/[A-Z]/.test(password)) {
        throw new Error("Password must contain uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
        throw new Error("Password must contain lowercase letter");
    }

    if (!/[0-9]/.test(password)) {
        throw new Error("Password must contain a number");
    }
};

export const validateSignup = (username, email, password) => {
    username = username?.trim();
    email = email?.trim();
    password = password?.trim();

    if (!username || !email || !password) {
        throw new Error("All fields are required");
    }

    if (username.length < 3 || username.length > 15) {
        throw new Error("Username must be 3–15 characters");
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        throw new Error("Username can only contain letters, numbers, underscore");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format");
    }

    if (password.length < 8 || password.length > 20) {
        throw new Error("Password must be 8–20 characters long");
    }

    if (!/[A-Z]/.test(password)) {
        throw new Error("Password must contain uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
        throw new Error("Password must contain lowercase letter");
    }

    if (!/[0-9]/.test(password)) {
        throw new Error("Password must contain number");
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        throw new Error("Password must contain special character");
    }
};