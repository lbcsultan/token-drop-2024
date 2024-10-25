"use client";
import { CONTRACT } from "@/app/constants";
import { formatNumber } from "@/lib/utils";
import React from "react";
import { useReadContract } from "thirdweb/react";

export default function TokenInfo() {
  const { data: name, isPending: isPendingName } = useReadContract({
    contract: CONTRACT,
    method: "function name() view returns (string)",
  });
  const { data: symbol, isPending: isPendingSymbol } = useReadContract({
    contract: CONTRACT,
    method: "function symbol() view returns (string)",
  });
  const { data: totalSupply, isPending: isPendingTotalSupply } =
    useReadContract({
      contract: CONTRACT,
      method: "function totalSupply() view returns (uint256)",
    });

  return (
    <div className="mt-4 text-gray-800 p-4 rounded-md bg-slate-300">
      <h1 className="text-2xl font-bold mb-2">Token Info</h1>
      <p>Name: {isPendingName ? "Loading..." : name}</p>
      <p>Symbol: {isPendingSymbol ? "Loading..." : symbol}</p>
      <p>
        Total Supply:
        {isPendingTotalSupply
          ? "Loading..."
          : `${formatNumber(totalSupply)} ${symbol}`}
      </p>
    </div>
  );
}
