"use server";
import qs from "query-string";

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL) throw new Error("COINGECKO_BASE_URL not found");
if (!API_KEY) throw new Error("COINGECKO_API_KEY not found");

export async function fetcher<T>(
  endpoint: string,
  params?: QueryParams,
  revalidate = 60,
): Promise<T> {
  const url = qs.stringifyUrl(
    {
      url: `${BASE_URL}/${endpoint}`,
      query: params,
    },
    { skipNull: true, skipEmptyString: true },
  );

  const response = await fetch(url, {
    headers: {
      "x-cg-api-key": API_KEY,
      "Content-Type": "application/json",
    } as Record<string, string>,
    next: { revalidate },
  });

  if (!response.ok) {
    const errorBody: CoinGeckoErrorBody = await response.json().catch(() => {});

    throw new Error(
      `API ERROR ${response.status}: ${errorBody.error} | ${response.statusText}`,
    );
  }

  return response.json();
}

// This work only on the pro plan
export async function getPools(
  id: string,
  network?: string | null,
  contractAddress?: string | null,
): Promise<PoolData> {
  const fallback: PoolData = {
    id: "",
    address: "",
    name: "",
    network: "",
  };

  if (network && contractAddress) {
    const poolData = await fetcher<{ data: PoolData[] }>(
      `/onchain/networks/${network}/tokens/${contractAddress}/pools`,
    );

    return poolData.data?.[0] ?? fallback;
  }

  try {
    const poolData = await fetcher<{ data: PoolData[] }>(
      "/onchain/search/pools",
      { query: id },
    );

    return poolData.data?.[0] ?? fallback;
  } catch {
    return fallback;
  }
}

// This work only on the pro plan
export async function searchCoins(query: string): Promise<SearchCoin[]> {
  const fallback: SearchCoin[] = [];

  try {
    const searchCoin = await fetcher<{ coins: [] }>("/search", {
      query,
    });

    return searchCoin.coins ?? fallback;
  } catch {
    return fallback;
  }
}
