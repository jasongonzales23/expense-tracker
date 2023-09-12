"use client";
import { Flowbite } from "flowbite-react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navigation from "@/components/Navigation";
import customTheme from "./custom-theme";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="h-full bg-gray-50">
          <Flowbite theme={{ theme: customTheme }}>
            <Navigation />
            {children}
          </Flowbite>
        </body>
      </UserProvider>
    </html>
  );
}
