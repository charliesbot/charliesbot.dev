import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav>
        <h1>Next'Blog</h1>
        <div>
          <Link href="/">
            <a>Blog</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export { NavBar };
