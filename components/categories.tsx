import { fetcher } from "@/lib/coingecko.actions";
import DataTable from "@/components/dataTable";
import { cn, formatCurrency } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";

const Categories = async () => {
  const response = await fetcher<Category[]>("/coins/categories");

  const columns: DataTableColumn<Category>[] = [
    {
      header: "Categories",
      cellClassName: "category-cell",
      cell: (category) => category.name,
    },
    {
      header: "Top Gainers",
      cellClassName: "top-gainers-cell",
      cell: (category) =>
        category.top_3_coins.map((item) => (
          <Image key={item} src={item} alt={item} width={24} height={24} />
        )),
    },
    {
      header: "24h Change",
      cellClassName: "change-header-cell",
      cell: (coin) => {
        const isTrendingUp = coin.market_cap_change_24h > 0;
        return (
          <div
            className={cn(
              "price-change",
              isTrendingUp ? "text-green-500" : "text-red-500"
            )}
          >
            <p>
              {isTrendingUp ? (
                <TrendingUp width={16} height={16} />
              ) : (
                <TrendingDown width={16} height={16} />
              )}
              {Math.abs(coin.market_cap_change_24h).toFixed(2)}%
            </p>
          </div>
        );
      },
    },
    {
      header: "Market Cap",
      cellClassName: "market-cap-cell",
      cell: (category) => formatCurrency(category.market_cap, "USD"),
    },
    {
      header: "24h Volume",
      cellClassName: "volume-cell",
      cell: (category) => formatCurrency(category.volume_24h),
    },
  ];

  return (
    <div id="categories" className="custom-scrollbar">
      <h4 className="categories">Categories</h4>
      <DataTable
        rowKey={(category) => category.name}
        columns={columns}
        data={response?.slice(0, 10)}
        tableClassName="mt-3"
      />
    </div>
  );
};

export default Categories;
