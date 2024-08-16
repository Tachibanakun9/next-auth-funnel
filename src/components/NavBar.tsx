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

        <div className="flex flex-col space-y-4 text-sm">
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="home">
        </MenuItem>
        </Link>
        </div>

        <div className="flex flex-col space-y-4 text-sm">
        <MenuItem setActive={setActive} active={active} item="Products">
        <HoveredLink href="/products">Our Products</HoveredLink>
        </MenuItem>
        </div>

        <div className="flex flex-col space-y-4 text-sm">
        <MenuItem setActive={setActive} active={active} item="Blog">
        <HoveredLink href="/blog">Our Blog</HoveredLink>
        </MenuItem>
        </div>

        <div className="flex flex-col space-y-4 text-sm">
        <MenuItem setActive={setActive} active={active} item="Contact-us">
        <HoveredLink href="/contact-us">Contact us</HoveredLink>
        </MenuItem>
        </div>

      </Menu>
      </div>
  )
}



export default NavBar