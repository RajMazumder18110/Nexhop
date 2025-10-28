"use client";
/** @notice Library imports */
import { useState } from "react";
import { CircleCheck, Copy } from "lucide-react";
import copy from "copy-to-clipboard";
/// Local imports
import { Button } from "./ui/button";

const CopyToClip = ({ text }: { text: string }) => {
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
      size="icon"
      variant="ghost"
      disabled={status}
      onClick={handleCopy}
      className="hover:text-highlight transition-colors duration-300"
    >
      {status ? <CircleCheck /> : <Copy />}
    </Button>
  );
};

export default CopyToClip;
