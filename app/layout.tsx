import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car rental",
  description: "MH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
