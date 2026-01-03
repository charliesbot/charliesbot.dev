import NextLink from "next/link";
import { HorizontalLayout } from "./ds/HorizontalLayout";
import { Link } from "./ds/Link";
import { Text } from "./ds/Text";

const Options = [
  {
    title: "Blog",
    href: "/",
    target: "",
  },
  {
    title: "Speaking",
    href: "https://slides.com/charliesbot",
    target: "_blank",
  },
  {
    title: "Contact",
    href: "/contact",
    target: "",
  },
];

const Navbar = () => {
  return (
    <HorizontalLayout space="15px">
      {Options.map((o) => (
        <NextLink href={o.href}>
          <Link target={o.target} href={o.href}>
            <Text fontFamily="monospace" fontSize="2rem">
              {o.title}
            </Text>
          </Link>
        </NextLink>
      ))}
    </HorizontalLayout>
  );
};

export { Navbar };
