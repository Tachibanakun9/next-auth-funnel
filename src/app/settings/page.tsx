import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import SettingsPage from "./SettingsPage";

export const metadata: Metadata = {
  title: "Settings",
};
/*this is how we comment */
export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return <SettingsPage user={user} />;
}
