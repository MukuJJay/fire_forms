import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";
import Logo from "@/components/logo";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col p-4">
      <nav className="flex py-2 px-4 items-center justify-between border-b border-primary relative">
        <Logo />
        <ul className="flex justify-center items-center gap-4">
          <li>
            <ThemeToggle />
          </li>
          <li>
            <UserButton
              appearance={{ elements: { avatarBox: "w-[40px] h-[40px]" } }}
            />
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
