"use client";
/** @notice Library imports */
import { useState } from "react";
import { CircleCheck, Copy } from "lucide-react";
import copy from "copy-to-clipboard";
/// Local imports
import { Button } from "./ui/button";

const CopyToClip = ({
  text,
  iconClassName,
}: {
  text: string;
  iconClassName?: string;
}) => {
  const [status, setStatus] = useState(false);

  const handleCopy = () => {
    copy(text, {
      onCopy() {
        setStatus(true);
        setTimeout(() => {
          setStatus(false);
        }, 2000);
      },
    });
  };

  return (
    <Button
      size={iconClassName ? "icon-lg" : "icon"}
      variant="ghost"
      disabled={status}
      onClick={handleCopy}
      className="hover:text-highlight transition-colors duration-300"
    >
      {status ? (
        <CircleCheck className={iconClassName} />
      ) : (
        <Copy className={iconClassName} />
      )}
    </Button>
  );
};

export default CopyToClip;
