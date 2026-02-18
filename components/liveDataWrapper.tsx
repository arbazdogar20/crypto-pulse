import { formatCurrency, timeAgo } from "@/lib/utils";
import CandleStickChart from "./candleStickChart";
import { Separator } from "./ui/separator";
import DataTable from "./dataTable";
import CoinHeader from "./coinHeader";

const LiveDataWrapper = ({
  children,
  coinId,
  coin,
  coinOHLCData,
  poolId,
}: LiveDataProps) => {
  const tradeColumns: DataTableColumn<Trade>[] = [
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: (trade) => (trade.price ? formatCurrency(trade.price) : "-"),
    },
    {
      header: "Amount",
      cellClassName: "amount-cell",
      cell: (trade) => trade.amount?.toFixed(4) ?? "-",
    },
    {
      header: "Value",
      cellClassName: "value-cell",
      cell: (trade) => (trade.value ? formatCurrency(trade.value) : "-"),
    },
    {
      header: "Buy/Sell",
      cellClassName: "type-cell",
      cell: (trade) => (
        <span
          className={trade.type === "b" ? "text-green-500" : "text-red-500"}
        >
          {trade.type === "b" ? "Buy" : "Sell"}
        </span>
      ),
    },
    {
      header: "Time",
      cellClassName: "time-cell",
      cell: (trade) => (trade.timestamp ? timeAgo(trade.timestamp) : "-"),
    },
  ];

  return (
    <section id="live-data-wrapper">
      <CoinHeader
        name={coin.name}
        image={coin.image.large}
        livePrice={coin.market_data.current_price.usd}
        livePriceChangePercentage24h={
          coin.market_data.price_change_percentage_24h_in_currency.usd
        }
        priceChangePercentage30d={
          coin.market_data.price_change_percentage_30d_in_currency.usd
        }
        priceChange24h={coin.market_data.price_change_24h_in_currency.usd}
      />

      <Separator className="divider" />

      <div className="trend">
        <CandleStickChart
          coinId={coinId}
          data={coinOHLCData}
          liveInterval="1s"
        />
        {/* <h4>Trend Overview</h4> */}
      </div>

      {/* I implement in the future because I need a pro version of coin-gecko api */}
      {/* <Separator className="divider" /> */}
      {/* {tradeColumns && (
        <div className="trades">
          <h4>Recent Trades</h4>
          <DataTable
            rowKey={(_, index) => index}
            columns={tradeColumns}
            data={[]}
            tableClassName="trades-table"
          />
        </div>
      )} */}
      <Separator className="divider" />

      {children}
    </section>
  );
};

export default LiveDataWrapper;
