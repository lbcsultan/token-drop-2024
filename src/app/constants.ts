import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";
const contractAddress = "0xa5f6218f08983B241ce291776009e7c4FA82Bf81";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
