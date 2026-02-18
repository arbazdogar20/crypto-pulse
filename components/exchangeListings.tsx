import DataTable from "@/components/dataTable";
import { formatCurrency, timeAgo } from "@/lib/utils";

const ExchangeListings = async ({
  data,
}: {
  data: ExchangeListingsTableData[];
}) => {
  const tradeColumns: DataTableColumn<ExchangeListingsTableData>[] = [
    {
      header: "Exchange",
      cellClassName: "price-cell",
      cell: (exchange) => (
        <span className="text-green-500">{exchange.market.name}</span>
      ),
    },
    {
      header: "Pair",
      cellClassName: "amount-cell",
      cell: (exchange) => exchange.base + " / " + exchange.target || "-",
    },
    {
      header: "Price",
      cellClassName: "value-cell",
      cell: (exchange) => formatCurrency(exchange.last) || "-",
    },
    {
      header: "Last Traded",
      cellClassName: "type-cell",
      cell: (exchange) => timeAgo(exchange.timestamp) || "-",
    },
  ];

  return (
    <div className="trades">
      <h4>Exchange Listings</h4>

      <DataTable
        columns={tradeColumns}
        data={data.splice(0, 10) || []}
        rowKey={(row, index) => index}
        tableClassName="trades-table"
      />
    </div>
  );
};

export default ExchangeListings;
