"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../theme-toggle";

const Navbar = () => {
  const { data } = useSession();

  return (
    <nav className="flex p-10 py-4 justify-around items-center">
      <Link href='/'><h3>Blogify</h3></Link>
      <div className="flex justify-center items-center gap-2">
        <ModeToggle />
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex item-center text-sm gap-2">
                {data.user.image && (
                  <Image
                    className="rounded-full"
                    src={data.user.image}
                    height={20}
                    width={20}
                    alt="User Image"
                  />
                )}
                <p>{data.user.name}</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Admin</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            className="bg-primary text-secondary text-sm px-2 py-1 rounded-lg font-bold"
            href="/signin"
          >
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
