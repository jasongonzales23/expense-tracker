"use client";
import { Flowbite } from "flowbite-react";
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
      <body className="h-full bg-gray-50">
        <Flowbite theme={{ theme: customTheme }}>
          <Navigation active={true} />
          {children}
        </Flowbite>
      </body>
    </html>
  );
}
