import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col ">
      <nav>
        <div>FIRE_FORMS</div>
        <div></div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
