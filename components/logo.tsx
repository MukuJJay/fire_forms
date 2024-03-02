"use client";

import useMount from "@/hooks/useMount";
import Link from "next/link";

const Logo = () => {
  const isMounted = useMount();
  if (!isMounted) return null;

  const origin = window.location.origin;

  return <Link href={origin}>FireForms</Link>;
};

export default Logo;
