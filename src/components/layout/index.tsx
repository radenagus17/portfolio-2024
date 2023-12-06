"use client";
import React, { FC, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "./header";
import Footer from "./footer";
import { ThemeProviderProps } from "next-themes/dist/types";

interface LayoutProps {
  children: ReactNode;
  props: ThemeProviderProps;
}

const Layout: FC<LayoutProps> = ({ props, children }) => {
  return (
    <NextThemesProvider {...props}>
      <Header />
      {children}
      <Footer />
    </NextThemesProvider>
  );
};

export default Layout;
