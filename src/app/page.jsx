import { redirect } from "next/navigation";

export const metadata = {
  title: "Home | Acero News",
};

export default function Home({ params }) {
  if (params !== "bn" || "en") redirect("/bn");
  return null;
}
