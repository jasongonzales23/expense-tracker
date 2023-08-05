"use client";
import "./globals.css";
import { Navbar } from "flowbite-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full bg-gray-50">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 20"
            >
              <path
                stroke="rgb(59, 130, 246)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h6m-6 4h6m-6 4h6M1 1v18l2-2 2 2 2-2 2 2 2-2 2 2V1l-2 2-2-2-2 2-2-2-2 2-2-2Z"
              />
            </svg>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Expense Tracker
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>

        {children}
      </body>
    </html>
  );
}
