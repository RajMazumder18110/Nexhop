"use client";
/** @notice Library imports */
import QRCodeStyling, {
  CornerDotType,
  CornerSquareType,
  DotType,
  DrawType,
  ErrorCorrectionLevel,
  Mode,
  Options,
  TypeNumber,
} from "qr-code-styling";
import { useEffect, useRef, useState } from "react";

type LinkQRCodeProps = {
  shortUrl: string;
  width: number;
  height: number;
};

const getQRCodeOptions = (data: string, width: number, height: number) =>
  ({
    width,
    height,
    type: "svg" as DrawType,
    // jsdom: JSDOM,
    // nodeCanvas,
    data: data,
    // image:
    margin: 0,
    qrOptions: {
      mode: "Byte" as Mode,
      typeNumber: 0 as TypeNumber,
      errorCorrectionLevel: "Q" as ErrorCorrectionLevel,
    },
    imageOptions: {
      imageSize: 0.4,
      margin: 20,
      crossOrigin: "anonymous",
      hideBackgroundDots: true,
    },
    dotsOptions: {
      color: "#95c600",
      type: "rounded" as DotType,
    },
    backgroundOptions: {
      color: "#030712",
    },
    cornersSquareOptions: {
      color: "#95c600",
      type: "extra-rounded" as CornerSquareType,
    },
    cornersDotOptions: {
      color: "#95c600",
      type: "dot" as CornerDotType,
    },
  }) satisfies Options;

const LinkQRCode = (props: LinkQRCodeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (ref.current && !isUpdated) {
      const qrCode = new QRCodeStyling(
        getQRCodeOptions(props.shortUrl, props.width, props.height)
      );
      qrCode.append(ref.current);
      setIsUpdated(true);
    }
  }, []);

  return <div ref={ref} />;
};

export default LinkQRCode;
