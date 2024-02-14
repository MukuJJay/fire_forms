import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col p-4">
      <nav className="flex mb-4 py-2 px-4 items-center justify-between border-b border-primary">
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
