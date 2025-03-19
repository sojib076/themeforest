"use client";

import useLenis from "./useLenis";



export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
