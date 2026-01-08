import { fetcher } from "@/lib/coingecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { CoinOverviewFallback } from "./fallback";
import CandleStickChart from "../candleStickChart";

const CoinOverview = async () => {
  try {
    const [coin, ohlcData] = await Promise.all([
      fetcher<CoinDetailsData>("/coins/bitcoin", {
        dex_pair_format: "symbol",
      }),

      fetcher<OHLCData[]>("/coins/bitcoin/ohlc", {
        vs_currency: "usd", // You can change this to your desired currency
        days: "1", // You can change this to the desired number of days
        precision: "full", // Example of an additional parameter
      }),
    ]);

    return (
      <div id="coin-overview">
        <CandleStickChart data={ohlcData} coinId="bitcoin" liveInterval="1s">
          <div className="header pt-2">
            <Image
              src={coin.image.large}
              width={56}
              alt={coin.name}
              height={56}
            />
            <div className="info">
              <p>
                {coin.name} / {coin.symbol.toUpperCase()}
              </p>
              <h1>
                {formatCurrency(coin.market_data.current_price.usd, "USD")}
              </h1>
            </div>
          </div>
        </CandleStickChart>
      </div>
    );
  } catch (error) {
    console.error("Error fetching coin details:", error);
    return <CoinOverviewFallback />;
  }
};

export default CoinOverview;
