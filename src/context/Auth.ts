import { createContext } from "react";

export const Auth = createContext({ token: "", setToken: (value: string) => {} });
