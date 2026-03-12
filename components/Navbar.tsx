"use client";

// import { NAVIGATION } from "@/constants";
import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const Navbar = () => {
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="bg-black p-4 text-white">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            SUPER SHOPPING PLACE ONLINE STORE
          </h1>
        </Link>

        {/* confusing navigation */}
        <nav className="flex gap-3 text-sm">
          <Link href="/Stuff">Stuff</Link>
          <Link href="/More-stuff">More Stuff</Link>
          <Link href="/Men">Category A</Link>
          <Link href="/Women">Category B</Link>
          <Link href="/Kids">Category C</Link>
          <Link href="/products">Random Items</Link>
        </nav>

        <button
          onClick={() => handleCartClick()}
          className="flex items-center gap-2"
        >
          <ShoppingBag />
          Basket
        </button>
      </div>
    </header>
  );
};

export default Navbar;
