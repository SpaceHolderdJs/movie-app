"use client";

import { FC, PropsWithChildren } from "react";
import store from "@/store";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={store}>
            <SnackbarProvider autoHideDuration={1500}>
                {children}
            </SnackbarProvider>
        </Provider>
    );
};
