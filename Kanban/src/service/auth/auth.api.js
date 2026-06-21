import axiosInstance from "../../api/axiosInstance";

export const loginRequest = (email, password) => {
    return axiosInstance.post("/api/auth/login", {
        email,
        password,
    });
};

export const signupRequest = (username, email, password) => {
    return axiosInstance.post("/api/auth/signup", {
        username,
        email,
        password,
    });
};