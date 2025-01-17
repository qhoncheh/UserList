import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "user list with data river",
  description: "created by ghoncheh ataee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
