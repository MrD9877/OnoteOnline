import { createContext } from "react";

export const userContext = createContext({ valid: false, username: null, email: null })