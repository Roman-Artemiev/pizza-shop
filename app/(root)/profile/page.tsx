import { getUserSession } from "@/shared/lib/get-user-session";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getUserSession();

  if(!session) {
    return redirect('/not-auth')
  }

  return (
    <div>Profile</div>
  )
}