"use client";

import Link from "next/link";
import UserButton from "./UserButton";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
 





 function NavBar({ className }: { className?: string }) {
  
  
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="home">
        </MenuItem>
        </Link>

      
        <MenuItem setActive={setActive} active={active} item="Products">
        <HoveredLink href="/products">Our Products</HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Blog">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact-us">
        </MenuItem>

      </Menu>
      </div>
  )
}



export default NavBar