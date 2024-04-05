import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { domainName } from "./const/yourDetails";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: domainName,
  cookieOptions: {
    domain: "rarebay.xyz",
    path: "/api",
    sameSite: "strict" // or "lax" or "none"
  }
});