import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col px-4">
      <nav className="flex py-2 px-4 items-center justify-between border-b border-primary">
        <div>FIRE_FORMS</div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
