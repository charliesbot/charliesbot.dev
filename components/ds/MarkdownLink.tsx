import React from "react";
import { FancyLink as Link } from "./Link";

const domainRegex = ["localhost", "charliesbot.dev"];

const MarkdownLink = ({ href, ...props }: any) => {
  const isDomainHref = domainRegex.some((d) => href.includes(d));
  console.log("teeest ", props);

  if (!isDomainHref) {
    return (
      <Link
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
      />
    );
  }

  return <Link href={href} {...props} />;
};

export { MarkdownLink };
