import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kage — Where stillness reveals the unseen",
  description:
    "A five-chapter night walk through a Kyoto mountain temple, rendered live in WebGL.",
};

export default function KageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
