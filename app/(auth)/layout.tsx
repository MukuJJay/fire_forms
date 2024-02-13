import React, { ReactNode } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      {children}
    </section>
  );
};

export default Layout;
