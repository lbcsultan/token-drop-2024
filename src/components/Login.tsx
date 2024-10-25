import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
export default function Login() {
  return (
    <div className="flex justify-center items-center">
      <ConnectButton client={client} />
    </div>
  );
}
