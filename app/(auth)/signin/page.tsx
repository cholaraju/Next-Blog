import { getServerSession } from "next-auth";
import SignInForm from "./_components/Signin-form";
import { redirect } from "next/navigation";

export default async function SingInPage() {
  const session = await getServerSession( );
   if(session?.user) return redirect("/admin")

  if (session?.user) return 
  return (
    <main>
      <SignInForm />
    </main>
  );
}
