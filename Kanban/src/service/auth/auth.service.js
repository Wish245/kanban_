import { validateLogin, validateSignup } from "./auth.validation";
import { loginRequest, signupRequest } from "./auth.api";

export const login = async (email, password) => {
    validateLogin(email, password);

    try {
        const response = await loginRequest(email, password);
        return response.data;
    } catch (error) {
        handleAuthError(error, "login");
    }
};

export const signup = async (username, email, password) => {
    validateSignup(username, email, password);

    try {
        const response = await signupRequest(username, email, password);
        return response.data;
    } catch (error) {
        handleAuthError(error, "signup");
    }
};

// centralized error handler
const handleAuthError = (error, type) => {
    if (error.response) {
        const status = error.response.status;

        if (status === 400) {
            throw new Error(`${type} failed: invalid input`);
        }

        if (status === 401) {
            throw new Error("Invalid credentials");
        }

        if (status === 409) {
            throw new Error("User already exists");
        }

        throw new Error(`${type} failed. Please try again later`);
    }

    throw new Error("Network error. Please check your connection");
};