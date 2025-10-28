// "use client";
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
import { JSDOM } from "jsdom";
import nodeCanvas from "canvas";

type LinkQRCodeProps = {
  shortUrl: string;
};

const getQRCodeOptions = (data: string) =>
  ({
    width: 200,
    height: 200,
    type: "svg" as DrawType,
    jsdom: JSDOM,
    nodeCanvas,
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

const LinkQRCode = async (props: LinkQRCodeProps) => {
  const qrCode = new QRCodeStyling(getQRCodeOptions(props.shortUrl));
  const buffer = await qrCode.getRawData("svg");
  const svg = buffer?.toString();

  return svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : null;
};

export default LinkQRCode;
