"use client";

import Google from "@/components/logo/google"
// import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
const SignInForm = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center gap">
      <Button onClick={()=> signIn("google")} className="flex justify-center items-center gap-2">
        <Google />
        Continue with google
      </Button>
    </div>
  );
};
export default SignInForm;
