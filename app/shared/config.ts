const host: string = process.env.NEXT_PUBLIC_HOST || "localhost";
const mode: string = process.env.NEXT_PUBLIC_MODE || "PROD";

export const mainUrl =
  mode === "PROD" ? "https://eb.by/" : `http://${host}:3000/`;

export const googleTagManager: string = process.env
  .NEXT_PUBLIC_GOOGLE_TAG_MANAGER as string;
export const googleAdsense: string =
  (process.env.NEXT_PUBLIC_GOOGLE_ADSENSE as string) || "test";
