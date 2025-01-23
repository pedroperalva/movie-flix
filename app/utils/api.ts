"use client";

import axios from "axios";
import { logout } from "./logout";
import { useContext } from "react";
import { context } from "../context";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
});

export const api2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_2,
  headers: {
    accept: "application/json",
  },
});

api2.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    console.warn("No token found. Request may fail.");
  }
  return config;
});

api2.interceptors.response.use(
  (response): any => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Token might be expired or invalid.");
      logout();
    } else if (error.response?.status === 400) {
      throw new Error("Email já está sendo utilizado.");
    }
  }
);
