import Link from "next/link";
import { Link as DSLink } from "./ds/Link";
import HiArrowNarrowLeft from "@meronex/icons/hi/HiArrowNarrowLeft";

import { HorizontalLayout } from "./ds/HorizontalLayout";
import { Text } from "./ds/Text";

const BackHeader = () => {
  return (
    <nav>
      <Link href="/">
        <DSLink>
          <HorizontalLayout space="1rem">
            <HiArrowNarrowLeft size={20} />
            <Text fontFamily="monospace" fontSize="2rem">
              Home
            </Text>
          </HorizontalLayout>
        </DSLink>
      </Link>
    </nav>
  );
};

export { BackHeader };
