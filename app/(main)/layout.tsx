import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col ">
      <nav className="flex p-4 items-center justify-between">
        <div>FIRE_FORMS</div>
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
