import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return href == pathname;
  };
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://our-expenses.com">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 20"
        >
          <path
            stroke="rgb(14, 165, 233)"
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
        <Navbar.Link href="/" active={isActive("/")}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/all-expenses" active={isActive("/all-expenses")}>
          All Expenses
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
