import { BigNumber, ethers } from "ethers";

export const profileSortByFormatted: Record<string, string> = {};

export const formatPriceWithDecimals = (
  price: string,
  decimalCases: number
) => {
  if (!price) return "";
  return (
    Math.floor(parseFloat(price) * Math.pow(10, decimalCases)) /
    Math.pow(10, decimalCases)
  ).toFixed(decimalCases);
};

export const formatEthPrice = (price: string): string => {
  if (!price) return "";
  return formatBigNumberPrice(BigNumber.from(price.toString()));
};

export const formatBigNumberPrice = (price: BigNumber) => {
  return parseFloat(ethers.utils.formatEther(price)).toFixed(4);
};

export const formatTokenQuantity = (
  tokenQuantity: string,
  decimals: string
) => {
  if (decimals === "6") {
    // 12 zeros
    const completeNumber = tokenQuantity + "000000000000";
    return parseFloat(formatEthPrice(completeNumber)).toFixed(2);
  }
  // By default 18 decimals
  return formatEthPrice(tokenQuantity);
};
