"use client";

import useMount from "@/hooks/useMount";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Fire Forms.png";

const Logo = () => {
  const isMounted = useMount();
  if (!isMounted) return null;

  const origin = window.location.origin;

  return (
    <Link href={origin}>
      <Image src={logo} alt="Fire Forms" width={50} height={50}></Image>
    </Link>
  );
};

export default Logo;
