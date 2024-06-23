import { redirect } from "next/navigation";

export default function Home({ params }) {
  if (params !== "bn" || "en") redirect("/bn");
  return null;
}
