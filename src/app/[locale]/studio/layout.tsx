import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DailyStack – Your Daily Dose of Tech Updates",
  description:
    "Stay up to date with the latest technology news, tutorials, tools, and industry insights. Freshly curated for developers and tech enthusiasts.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
