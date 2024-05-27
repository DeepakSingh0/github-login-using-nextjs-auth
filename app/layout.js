import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body className={inter.className}>{children}</body>
      </SessionWrapper>
    </html>
  );
}
